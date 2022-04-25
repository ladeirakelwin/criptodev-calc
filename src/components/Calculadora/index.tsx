import React, { useState } from 'react';
import { Background, Container, Content } from './style';

const Calculadora: React.FC = () => {
	const [value, setValue] = useState('0');
	const [currentProduct, setCurrentProduct] = useState('0');
	const [operator, setoperator] = useState('');

	function clearValue(): void {
		const newValue = value;
		const newValueSeparated = newValue.split('');
		newValueSeparated.pop();

		const newValueJoined = newValueSeparated.join('');

		setValue(newValueJoined);
	}

	function getValue(newValue: string): void {
		const updateValue = String(Number(value + newValue));
		setValue(updateValue);
	}

	function insertOperator(newOperator: string): void {
		
	}

	return (
		<Background>
			<Container>
				<Content>
					<div id="display">
						<input type="text" id="subtotal" disabled value={currentProduct} />
						<input type="text" id="total" disabled value={value} />
					</div>

					<div id="keypad">
						<div className="line">
							<button onClick={() => 0} type="button" className="operator">
								AC
							</button>
							<button onClick={() => 0} type="button" className="operator">
								&#43;/&minus;
							</button>
							<button onClick={() => 0} type="button" className="operator">
								%
							</button>
							<button onClick={() => 0} type="button" className="operator">
								&frasl;
							</button>
						</div>
						<div className="line">
							<button onClick={() => getValue('7')} type="button">
								7
							</button>
							<button onClick={() => getValue('8')} type="button">
								8
							</button>
							<button onClick={() => getValue('9')} type="button">
								9
							</button>
							<button onClick={() => 0} type="button" className="operator">
								&times;
							</button>
						</div>
						<div className="line">
							<button onClick={() => getValue('4')} type="button">
								4
							</button>
							<button onClick={() => getValue('5')} type="button">
								5
							</button>
							<button onClick={() => getValue('6')} type="button">
								6
							</button>
							<button onClick={() => 0} type="button" className="operator">
								&minus;
							</button>
						</div>
						<div className="line">
							<button onClick={() => getValue('1')} type="button">
								1
							</button>
							<button onClick={() => getValue('2')} type="button">
								2
							</button>
							<button onClick={() => getValue('3')} type="button">
								3
							</button>
							<button onClick={() => 0} type="button" className="operator">
								&#43;
							</button>
						</div>
						<div className="line">
							<button onClick={() => getValue('0')} type="button">
								0
							</button>
							<button onClick={() => clearValue()} type="button" className="operator">
								C
							</button>
							<button
								onClick={() => 0}
								type="button"
								className="operator"
								id="equals"
							>
								&#61;
							</button>
						</div>
					</div>
				</Content>
			</Container>
		</Background>
	);
};

export default Calculadora;
