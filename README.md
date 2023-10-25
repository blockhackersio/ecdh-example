# Elliptic Curve Diffie Hellman

Elliptic Curve Diffie Hellman example.

## Prerequisites

- [bun](https://bun.sh/)

## Install dependencies

```
bun install
```

## Run the script

```
bun run src/index.ts
```

## SECP256K1 parameters for reference

| Param | Value                                                                          |
| ----- | ------------------------------------------------------------------------------ |
| p     | 115792089237316195423570985008687907853269984665640564039457584007908834671663 |
| a     | 0                                                                              |
| b     | 7                                                                              |
| Gx    | 55066263022277343669578718895168534326250603453777594175500187360389116729240  |
| Gy    | 32670510020758816978083085130507043184471273380659243275938904335757337482424  |
| n     | 115792089237316195423570985008687907852837564279074904382605163141518161494337 |
| h     | 1                                                                              |

## Normal Diffie Hellman

- $p$ The order of the field
- $G$ Generator number
- $a$ Alice Private key
- $A$ Alice Public key
- $b$ Bob Private key
- $B$ Bob Public key
- $S$ Shared secret

| Alice | Attacker sees | Bob |
|---|---|---|
| $a \in [1, p-1]$|$p,g$|$b \in [1,p-1]$|
|$A=g^a\mod{p}$|$A,B$|$B=g^b\mod{p}$|
|$S=B^a\mod{p}=(g^b)^a \mod{p}$||$S=A^b\mod{p}=(g^a)^b\mod{p}$|

## Elliptic Curve Diffie Hellman

- $n$ The key size
- $G$ Generator (Point) of the curve
- $a$ Alice Private key
- $A$ Alice Public key (Point)
- $b$ Bob Private key
- $B$ Bob Public key (Point)
- $(S_x,S_y)$ Shared secret point (usually only $S_x$ is used)

| Alice | Attacker sees | Bob |
|---|---|---|
|$a \in [1,n-1]$|$n, G$ | $b \in [1, n - 1]$|
|$A=a\cdot G$|$A, B$|$B = b \cdot G$|
|$(S_x,S_y)=a \cdot B=a\cdot (b \cdot G)$| | $(S_x,S_y)=b \cdot A = b \cdot (a \cdot G)$|
