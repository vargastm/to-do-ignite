import styled from 'styled-components'

export const Container = styled.body`
  background: #1A1A1A;
  height: calc(100vh - 192px);
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  input {
    margin-top: -1.6875rem;
    height: 3.375rem;
    width: 46rem;
    padding-left: 1rem;
    color: var(--gray-300);
    background: var(--gray-500);
    border: solid 1px var(--gray-700);
    border-radius: 8px;
  }

  button {
    margin-top: -1.6875rem;
    height: 3.25rem;
    width: 5.625rem;
    background: var(--blue-dark);
    color: var(--gray-100);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`
