import styled from 'styled-components'

export const Container = styled.body`
  background: #1A1A1A;
  height: calc(100vh - 192px);

  > div {
    display: flex;
    gap: 0.5rem;
    width: 46rem;
    margin: 0 auto;

    input {
      width: 100%;
      margin-top: -1.6875rem;
      height: 3.375rem;
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
  }
`

  export const Content = styled.section`
  border-top: 1px solid var(--gray-400);
  width: 46rem;
  margin: 4rem auto;
  border-radius: 8px;


  header {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;

    div {
      font-size: 0.875rem;
      font-weight: 700;

      &:first-child {
        color: var(--blue);
      }

      &:last-child {
        color: var(--purple);
      }
    }

    span {
      background: var(--gray-400);
      margin-left: 8px;
      padding: 0 8px;
      border-radius: 8px;
    }
  }

  > div {
    color: var(--gray-300);
    display: flex;
    flex-direction: column;
    width: 46rem;
    margin: 0 auto;
    align-items: center;
    margin-top: 5.5rem;
    line-height: 140%;
    
    span {
      font-weight: 700;
      margin-top: 16px;
    }
  }

  ul {
    li {
      background: var(--gray-500);
      color: var(--gray-100);
      display: flex;
      height: 4.5rem;
      margin-bottom: 0.75rem;
      position: relative;
      border: solid 1px var(--gray-400);
      border-radius: 8px;
      
      .completed {
        color: var(--gray-300);
        text-decoration: line-through;
      }

      &:first-child {
        margin-top: 1.5rem;
      }

      div {
        display: flex;
        gap: 12px;

        input {
          margin-left: 1rem;
          margin-top: 1rem;
          background: var(--gray-500);
          border-radius: 9px;
        }

        p {
          max-width: 90%;
          margin-top: 13px;
        }
      }
     
      button {
        background: none;
        border: none;
        color: var(--gray-300);
        position: absolute;
        right: 1rem;
        top: 1rem;
      }
    }
  }
`
