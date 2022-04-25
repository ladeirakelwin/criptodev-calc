import React, { useState } from 'react';
import { Background, Container, Content } from './style';


const Calculadora: React.FC = () => {
	const [subtotal, setSubtotal] = useState([]);
	const [total, setTotal] = useState([])

	return (
		<Background>
			<Container>
				<Content >
					<div id="display">
						<input type="text" id="subtotal" disabled value="99"/>
						<input type="text" id="total" disabled value="99"/>
					</div>

					<div id="keypad">
						<div className="line">
							<button className="operator">AC</button>
							<button className="operator">&#43;/&minus;</button>
							<button className="operator">%</button>
							<button className="operator">&frasl;</button>
						</div>
						<div className="line">
							<button>7</button>
							<button>8</button>
							<button>9</button>
							<button className="operator">&times;</button>
						</div>
						<div className="line">
							<button>4</button>
							<button>5</button>
							<button>6</button>
							<button className="operator">&minus;</button>
						</div>
						<div className="line">
							<button>1</button>
							<button>2</button>
							<button>3</button>
							<button className="operator">&#43;</button>
						</div>
						<div className="line">
							<button>0</button>
							<button className="operator">C</button>
							<button className="operator" id="equals">
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
