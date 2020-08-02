import styled from "styled-components";
import Link from "next/link";

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.font.size.title};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.highlight};
`;
