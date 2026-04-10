import { prf_v1 } from './prf_v1';
import { prf_v2 } from './prf_v2';
import { prf_v3 } from './prf_v3';
import { prf_v4 } from './prf_v4';
import { prf_v5 } from './prf_v5';
import { prf_v6 } from './prf_v6';
import { prf_v7 } from './prf_v7';
import { prf_v8 } from './prf_v8';

/**
 * BANCO DE DADOS PRF - ALTA FIDELIDADE
 * -----------------------------------
 * Estrutura dividida em 8 volumes para suportar o peso dos comentários integrais.
 * Total: 260 Questões (20 Originais + 120 Simulado 01 + 120 Simulado 02).
 * 
 * Regras Aplicadas:
 * 1. Sem CPFs ou dados sensíveis.
 * 2. Branding Bunker Quiz e remoção de nomes de terceiros.
 * 3. Comentários UNABRIDGED (sem qualquer tipo de resumo).
 * 4. Personalização dinâmica via {{USER_NAME}}.
 */

export const prfQuestions = [
  ...prf_v1,
  ...prf_v2,
  ...prf_v3,
  ...prf_v4,
  ...prf_v5,
  ...prf_v6,
  ...prf_v7,
  ...prf_v8
];
