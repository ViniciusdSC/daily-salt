---
to: src/<%= h.changeCase.paramCase(name) %>/pages/home/index.tsx
---

import React from 'react';

interface Props { }

const <%= h.changeCase.pascalCase(name) %>Home: React.FC<Props> = () => {
  return (
    <h1><%= h.changeCase.pascalCase(name) %>Home</h1>
  );
};

export default <%= h.changeCase.pascalCase(name) %>Home;
