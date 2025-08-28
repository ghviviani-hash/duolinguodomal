// types/pwa.d.ts

// Esta interface estende a interface global 'Window' do TypeScript
declare global {
  interface Window {
    // Informamos que a 'window' pode ter uma propriedade chamada 'workbox'
    workbox: any; 
  }
}

// Adicione esta linha no final para garantir que o ficheiro é tratado como um módulo
export {};