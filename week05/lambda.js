const I = (x) => x;

const K = (x) => (y) => x;

const TRUE = K;

const FALSE = K(I);

const IF = (b) => (t) => (f) => b(t)(f);

const AND = (x) => (y) => IF(x)(y)(FALSE);

const OR = (x) => (y) => IF(x)(TRUE)(y);

const NOT = (x) => IF(x)(FALSE)(TRUE);
