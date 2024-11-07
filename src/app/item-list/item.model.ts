
export interface Item {
    id: number;       // Id da lista de compras
    name: string;     // Nome do item
    title: string;    // Título do item
    purchased: boolean; // Se foi comprado ou não
    userId: number;   // ID do usuário que criou o item
    included: boolean; // Uma propriedade adicional, conforme o erro mostrado
  }
  