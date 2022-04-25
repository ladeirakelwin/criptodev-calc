import styled from 'styled-components';

export const Background = styled.div`
	width: 100%;
	height: 100vh;
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1440px;
	height: 100vh;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.form`
	display: flex;
	flex-direction: column;
	background: #fff;
  box-shadow: 2px 2px 14px 2px #444;
	max-width: 280px;
	border-radius: 1rem;
	padding: 0.5rem;

	#display {
		margin: 0 auto;
		margin-bottom: 2rem;

		input {
      background: none;
			width: 100%;
			height: 3rem;
			border: none;
			text-align: right;

			&#subtotal {
				height: 5rem;
				border-bottom: none;
				color: #00a8ff;
        font-size: 1.25rem;
			}
			&#total {
				border-top: none;
				font-size: 3rem;
			}
		}
	}

	#keypad {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.line {
			display: grid;
			gap: 0.5rem;
			grid-template-columns: repeat(4, 1fr);

			button {
				height: 1.5rem;
				background: none;
				border: none;
				font-size: 1rem;
				color: #444;

				&.operator {
					color: #00a8ff;
				}

				&#equals {
					background: #00a8ff;
					color: #fff;
					border-bottom-right-radius: 1rem;
				}
			}

			&:last-child {
				grid-template-columns: 1fr 1fr 2fr;
			}
		}
	}

	@media (min-width: 375px) {
		max-width: 80%;
	}

	@media (min-width: 425px) {
		#keypad {
			gap: 1rem;

			.line {
				gap: 1rem;

				button {
					height: 2.5rem;
					font-size: 1.25rem;
				}
			}
		}
	}

	@media (min-width: 768px) {
		max-width: 60%;

		#display {
			input {
				&#subtotal {
					font-size: 1.5rem;
				}
				&#total {
					font-size: 4rem;
				}
			}
		}

		#keypad {
			.line {
				button {
					height: 3rem;
					font-size: 1.5rem;
				}
			}
		}
	}

	@media (min-width: 1024px) {
		max-width: 55%;

		#display {
			input {
				&#subtotal {
					font-size: 2.25rem;
				}
				&#total {
					font-size: 5.5rem;
					height: 6rem;
				}
			}
		}

		#keypad {
			.line {
				button {
					height: 2.75rem;
					font-size: 1.35rem;
				}
			}
		}
	}

	@media (min-width: 1440px) {
		max-width: 50%;

    

    #keypad {
			.line {
				button {
					height: 3.5rem;
					font-size: 1.75rem;
				}
			}
		}
	}

  @media (min-width: 1800px) {

		#keypad {
			.line {
				button {
					height: 6rem;
					font-size: 3rem;
				}
			}
		}
	}
`;
