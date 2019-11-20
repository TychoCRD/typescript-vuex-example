# typescript-vuex-example
An example of typescript implementatin of vuex store with namespaced submodules. Unfortunately, type support doesn't work in Vue components without importing the type definitions. Type support does work for state look-ups in TS files where the store is directly imported, but getters still return `any`.
