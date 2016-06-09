#include <conio.h>
#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int value;
  struct node *left;
  struct node *right;
  int height;
} node;

node *insert(node *, int);
node *delete(node *, int);