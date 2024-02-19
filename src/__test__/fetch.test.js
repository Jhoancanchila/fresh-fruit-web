/* eslint-disable no-undef */
import "@testing-library/jest-dom"
import { renderHook, render, screen } from '@testing-library/react';
import { useFetch } from "../customHooks/useFetch";
import Detail from '../pages/Detail/Detail';

describe("function fetch",()=>{
  it('url invalid', () => {
    // Arrange
    const url = 'invalid-url';
  
    const { error } = renderHook(()=>useFetch(url))
  
    expect(error).not.toBeNull();
  });
  
  it('verify format response', () => {
    const url = 'http://localhost:3000/fruits';
  
    const { error } = renderHook(()=>useFetch(url)) 
  
    expect(error).not.toBeNull();
  });

})