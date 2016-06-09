/* -----------------------------------------------------------------
T1, T2 and T3 are subtrees of the tree rooted with y (on left side) 
or x (on right side)           
                y                               x
               / \     Right Rotation          /  \
              x   T3   – – – – – – – >        T1   y 
             / \       < - - - - - - -            / \
            T1  T2     Left Rotation            T2  T3
Keys in both of the above trees follow the following order 
      keys(T1) < key(x) < keys(T2) < key(y) < keys(T3)
So BST property is not violated anywhere.
----------------------------------------------------------------- */

#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int value;
  struct node *left;
  struct node *right;
  int height;
} node;

int getMax(int a, int b);

int getHeight(struct node *N) {
  if (N == NULL)
    return 0;
  return N->height;
}

int getMax(int a, int b) {
  return (a > b) ? a : b;
}

struct node* newNode(int value) {
  struct node* node = (struct node*)malloc(sizeof(struct node));

  node->value  = value;
  node->left   = NULL;
  node->right  = NULL;
  node->height = 1;
  return(node);
}

int getBalance(struct node *N) {
  if (N == NULL)
    return 0;

  left_h  = getHeight(N->left);
  right_h = getHeight(N->right);
  return left_h - right_h;
}

struct node *rightRotate(struct node *y) {
  struct node *x = y->left;
  struct node *T2 = x->right;

  x->right = y;
  y->left = T2;

  int T1_h = getHeight(x->left);
  int T2_h = getHeight(y->left);
  int T3_h = getHeight(y->right);
  int y_h  = getHeight(x->right);

  y->height = getMax(T2_h, T3_h) + 1;
  x->height = getMax(T1_h, y_h) + 1;

  return x;
}

struct node *leftRotate(struct node *x) {
  struct node *y = x->right;
  struct node *T2 = x-> left;

  y->left = x;
  x->right = T2;

  int T1_h = getHeight(x->left);
  int T2_h = getHeight(x->right);
  int T3_h = getHeight(y->right);
  int x_h  = getHeight(y->left);

  x->height = getMax(T1_h, T2_h) + 1;
  y->height = getMax(T3_h, x_h) + 1;

  return y;
}

struct node *insert(struct node *node, int value) {
  // set node
  if (node == NULL)
    return(newNode(value));
  if (value < node->value)
    node->left = insert(node->left, value);
  else
    node->right = insert(node->right, value);

  // set height
  left_h  = getHeight(node->left);
  right_h = getHeight(node->right);
  node->height = getMax(left_h, right_h) + 1;

  // set balance
  int balance = getBalance(node);

  // set rotations
  return setRotations(node, balance, value);

  return node;
}

struct node *setRotations(struct node *node, int balance, int value) {
  // right-right
  if ((balance > 1) && (value < node->left->value))
    return rightRotate(node);

  // left-left
  if ((balance < -1) && (value > node->right-value))
    return leftRotate(node);

  // left-right
  if ((balance > 1) && (value > node->left_value))
    node->left = leftRotate(node->left);
    return rightRotate(node);

  // right-left
  if ((balance < -1) && (value < node->right->value))
    node->right = rightRotate(node->right);
    return leftRotate(node);
}

void preOrder(struct node *root) {
  if (root != NULL) {
    printf("%d", root->value);
    preOrder(root->left);
    preOrder(root->right);
  }
}

int main()
{
  struct node *root = NULL;

  do {
    printf("\n1)Inserir");
    printf("\n2)Deletar");
    printf("\n3)Imprimir");
    printf("\n4)Sair");
    printf("\nEscolha a opção: "). scanf("%i", &option);

    switch(option) {
      case 1:
        printf("\nDigite o valor: "); scanf("%d", &value);
        root = insert(root, value);
        break;
      case 2:
        printf("\nDigite o valor: "); scanf("%d", &value);
        root = delete(root, value);
        break;
      case 3:
        printf("\nNão ordenada:\n")
        preOrder(root);
        // printf("\nOrdenada:\n");
        // inOrder(root);
        break;
    }
  } while(option != 4);
  return 0;
}