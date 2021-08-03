---
to: src/<%= h.changeCase.paramCase(name) %>/components/form/interfaces.ts
---

import { <%= h.changeCase.pascalCase(name) %>Interface } from '<%= h.changeCase.paramCase(name) %>/interfaces';

export type <%= h.changeCase.pascalCase(name) %>FormValues = Omit<<%= h.changeCase.pascalCase(name) %>Interface, 'id'>;
