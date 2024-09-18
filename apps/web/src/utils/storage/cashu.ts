import { MeltQuoteResponse, Proof, Token } from '@cashu/cashu-ts';
import { ICashuInvoice } from '../../types/wallet';

export const KEY_CASHU_STORE= {
  INVOICES:"INVOICES",
  QUOTES:"QUOTES",
  TOKENS:"TOKENS",
  PROOFS:"PROOFS",
  TRANSACTIONS:"TRANSACTIONS",

}
export const storeTokens= async (tokens:Token[]) => {

  return localStorage.setItem(KEY_CASHU_STORE.TOKENS, JSON.stringify(tokens));
};

export const getTokens= async () => {

  return localStorage.getItem(KEY_CASHU_STORE.PROOFS);
};


export const storeQuotes= async (quotes:MeltQuoteResponse[]) => {

  return localStorage.setItem(KEY_CASHU_STORE.QUOTES, JSON.stringify(quotes));
};


export const getQuotes= async (proofs:Proof[]) => {
  return localStorage.getItem(KEY_CASHU_STORE.QUOTES);
};


export const storeProofs= async (proofs:Proof[]) => {


  return localStorage.setItem(KEY_CASHU_STORE.PROOFS, JSON.stringify(proofs));
};


export const getProofs= async () => {


  return localStorage.getItem(KEY_CASHU_STORE.PROOFS);
};


export const getInvoices=  () => {


  return localStorage.getItem(KEY_CASHU_STORE.INVOICES);
};


export const storeInvoices= async (invoices:ICashuInvoice[]) => {

  return localStorage.setItem(KEY_CASHU_STORE.INVOICES, JSON.stringify(invoices));
};


export const getTransactions=  () => {

  return localStorage.getItem(KEY_CASHU_STORE.TRANSACTIONS);
};


export const storeTransactions= async (transactions:ICashuInvoice[]) => {

  return localStorage.setItem(KEY_CASHU_STORE.TRANSACTIONS, JSON.stringify(transactions));
};

export const addProofs = async (proofsToAdd:Proof[]) => {
  const proofsLocal = await getProofs()
  if (!proofsLocal) {
    await storeProofs([...proofsToAdd as Proof[]])
  } else {
    const proofs: Proof[] = JSON.parse(proofsLocal)
    await storeProofs([...proofs, ...proofsToAdd as Proof[]])
  }
}