# App Expo React Native com recursos de Autenticação usando Firebase

## Documentação

**Expo - Using Firebase:** https://docs.expo.dev/guides/using-firebase/

**React Native Firebase:** https://rnfirebase.io/

**Firebase:**

- Site oficial: https://firebase.google.com/
- Documentação: https://firebase.google.com/docs
- Autenticação: https://firebase.google.com/docs/auth/web/start

## 29/11: o que fizemos?

### Instalação e configurações em geral

1. Cadastro e criação de projeto no site Firebase (sem Analytics)
2. Registro do Firebase em um aplicativo web
3. Instalação da biblioteca Firebase em nosso app: `npm install firebase`
4. Criação do arquivo firebaseConfig.js contendo todo o script de acesso ao Firebase (obs.: este arquivo não deve ser publicado no GitHub)
5. Criação e configuração do Metro (bundler JS de apps React Native), seguindo as instruções disponíveis aqui: https://docs.expo.dev/guides/using-firebase/
6. Voltando ao console (site) do Firebase, criamos um serviço de Autenticação usando o provider de e-mail/senha.
7. Criamos um usário com e-mail/senha para nossos testes

### Programação das telas do app

1. Em `firebaseConfig.js` importamos `getAuth` do módulo `firebase/auth` e o exportamos como uma constante `auth`
2. Em `Login.js` fizemos os imports necessários do `auth` a partir de `firebaseConfig` e das funções `signInWithEmailAndPassword` e `sendPasswordResetEmail` a partir de `firebase/auth`
3. Em `Login.js` programamos as rotinas necessárias para capturar e-mail, senha e as funções para logar e recuperar senha.
4. Em `AreaLogada.js` fizemos os imports necessários (`auth` e `signOut`) e programamos a rotina de logout.

## 01/12: o que fizemos?

1. Em `Cadastro.js` fizemos:
   - imports necessários do `auth` a partir de `firebaseConfig` e das funções `createUserWithEmailAndPassword` a partir de `firebase/auth`
   - Programação da função `cadastrar` com validação de campos, processo de cadastro com verificações de erro e sucesso.
2. Em `Login.js`:
   - Refatoração da função `login` com recursos de loading.
