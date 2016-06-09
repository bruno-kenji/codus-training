#ifndef AVL_H
#define AVL_H

#ifdef __cplusplus
extern "C" {
#endif

typedef struct AVL_Node 
{    
    /*
     *  Estrutura do nó da árvore AVL.
     *  Contém um bit extra que informa
     *  o grau de balanceamento da árvore.
     *  Se for 0, 1 ou -1, a árvore está
     *  balanceada. Se não, serão realizadas
     *  algumas mudanças até que se balanceie
     */
     
     void *info;                // Informação contida no nó
     int bal;                   // Fator de balanceamento do nó
     
     struct AVL_Node *pai;      // Aponta para o nó ancestral
     struct AVL_Node *esq;      // Aponta para o filho da esquerda 
     struct AVL_Node *dir;      // Aponta para o filho da direita
     
} AVL_Node;

typedef struct AVL_Tree 
{
    /*
     *  Estrutura que define a árvore AVL.
     *  Aonde está guardada a raiz da árvore.
     *  Contém ponteiros para funções que
     *  manipulam as informações contidas na
     *  árvore.
     *  
     *  A função que o ponteiro compara_info
     *  aponta deverá retornar um valor inteiro
     *  segundo a seguinte legenda:
     *  +1 => Se o primeiro for maior
     *  -1 => Se o segundo for maior
     *   0 => Se os dois forem iguais 
     */
     
     AVL_Node *root;            // Raiz da árvore
     unsigned int num_nodes;    // Número de nós da árvore
     
     // Função que compara duas informações
     int (*compara_info)( const void *, const void * );
     // Função que imprime uma informação
     void (*imprime_info)( const void * );

} AVL_Tree;

/* Funções para manipulação da árvore */

// Inicialização da árvore
void avl_init ( AVL_Tree **, int (*compara_info)( const void *, const void * ),
        void (*imprime_info)( const void * ));

// Insere um elemento na árvore
int avl_insert ( AVL_Tree **, AVL_Node *, AVL_Node **, void * );

// Remove um elemento da árvore
int avl_remove ( AVL_Tree **, AVL_Node **, void * );

// Realiza o percurso em pré-ordem
void avl_walk_pre ( AVL_Tree *, AVL_Node * );

// Realiza o percurso em pos-ordem
void avl_walk_pos ( AVL_Tree *, AVL_Node * );

// Realiza o percurso em ordem simetrica
void avl_walk_sim ( AVL_Tree *, AVL_Node * );

// Realiza o percurso na árvore por nível
void avl_walk_byLevel ( AVL_Tree * );

// Faz uma busca na árvore
AVL_Node *avl_search ( AVL_Tree *, AVL_Node *, void * );

// Retorna a altura de uma sub-árvore
int avl_height ( AVL_Node * );

#ifdef __cplusplus
}
#endif


#endif /* AVL_H */