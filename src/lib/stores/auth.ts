import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

// Hash SHA-256 du mot de passe "HerpinStudio2024!"
// Généré avec: await crypto.subtle.digest('SHA-256', new TextEncoder().encode('HerpinStudio2024!'))
const PASSWORD_HASH = 'a1b2c3d4e5f6'; // Placeholder - sera calculé au runtime pour comparaison

const SESSION_KEY = 'billing_auth_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 heures en millisecondes

interface AuthSession {
  token: string;
  expiry: number;
}

function createAuthStore() {
  const { subscribe, set, update } = writable<AuthSession | null>(null);

  // Charger la session depuis localStorage au démarrage
  if (browser) {
    const stored = localStorage.getItem(SESSION_KEY);
    if (stored) {
      try {
        const session: AuthSession = JSON.parse(stored);
        if (session.expiry > Date.now()) {
          set(session);
        } else {
          localStorage.removeItem(SESSION_KEY);
        }
      } catch {
        localStorage.removeItem(SESSION_KEY);
      }
    }
  }

  return {
    subscribe,

    login: async (password: string): Promise<boolean> => {
      const inputHash = await hashPassword(password);
      const correctHash = await hashPassword('HerpinStudio2024!');

      if (inputHash === correctHash) {
        const session: AuthSession = {
          token: generateToken(),
          expiry: Date.now() + SESSION_DURATION
        };

        if (browser) {
          localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        }
        set(session);
        return true;
      }
      return false;
    },

    logout: () => {
      if (browser) {
        localStorage.removeItem(SESSION_KEY);
      }
      set(null);
    },

    checkSession: () => {
      if (browser) {
        const stored = localStorage.getItem(SESSION_KEY);
        if (stored) {
          try {
            const session: AuthSession = JSON.parse(stored);
            if (session.expiry > Date.now()) {
              set(session);
              return true;
            } else {
              localStorage.removeItem(SESSION_KEY);
              set(null);
            }
          } catch {
            localStorage.removeItem(SESSION_KEY);
            set(null);
          }
        }
      }
      return false;
    }
  };
}

async function hashPassword(password: string): Promise<string> {
  if (!browser) return '';

  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function generateToken(): string {
  if (!browser) return '';

  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
}

export const authStore = createAuthStore();
export const isAuthenticated = derived(authStore, $auth => $auth !== null && $auth.expiry > Date.now());
