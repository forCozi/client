import React from 'react';
import styled from 'styled-components';

export const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.7rem;
  width: 2.7rem;
  /* padding: 0 1.5rem; */
  border: none;
  background: #0058a3;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  svg {
    width: 25px;
    fill: #fff;
  }
  &:hover {
    background: #003461;
  }
`;

export default function ButtonCart() {
  return (
    <CircleButton>
      <svg
        focusable="false"
        viewBox="0 0 24 24"
        className="range-revamp-svg-icon range-revamp-btn__icon"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4372 4H10.9993H12.0003H12.9996H13.5616L13.8538 4.48014L17.2112 9.99713H21H22.2806L21.9702 11.2396L21.5303 13H19.4688L19.7194 11.9971H4.28079L5.59143 17.2397C5.70272 17.6848 6.1027 17.9971 6.56157 17.9971H15V19.9971H6.56157C5.18496 19.9971 3.98502 19.0602 3.65114 17.7247L2.02987 11.2397L1.71924 9.99713H3.00002H6.78793L10.145 4.48017L10.4372 4ZM12.4375 6L14.87 9.99713H9.12911L11.5614 6H12.0003H12.4375ZM17.9961 16V14H19.9961V16H21.9961V18H19.9961V20H17.9961V18H15.9961V16H17.9961Z"
        />
      </svg>
    </CircleButton>
  );
}
