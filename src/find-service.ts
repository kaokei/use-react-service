import type { CommonToken, Container } from '@kaokei/di';

function walk<T>(
  container: Container,
  token: CommonToken<T>,
  results: T[]
): T[] {
  if (container) {
    if (container && container.isCurrentBound(token)) {
      results.push(container.get(token));
    }
    if (container.children) {
      walkChildren(container.children, token, results);
    }
  }
  return results;
}

function walkChildren<T>(
  children: Container[],
  token: CommonToken<T>,
  results: T[]
): T[] {
  if (children && Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      walk(children[i], token, results);
    }
  }
  return results;
}

export function findService<T>(
  token: CommonToken<T>,
  container: Container
): T | undefined {
  const results: T[] = [];
  // todo
  walk(container.children, token, results);
  return results[0];
}

export function findAllServices<T>(
  token: CommonToken<T>,
  container: Container
): T[] {
  const results: T[] = [];
  // todo
  walk(container.children, token, results);
  return results;
}
