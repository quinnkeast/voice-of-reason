import styled from 'styled-components';

const HeaderContainer = styled.div`
	max-width: 900px;
	display: flex;
	align-content: center;
	justify-content: center;
	padding: 2rem 1rem 0;
	margin: 0 auto;
`;

const Logo = styled.span`
	font-size: 1rem;
	font-weight: 500;
	line-height: 1;
	color: #FD9777;
`;

const Header = () => (
	<HeaderContainer>
		<Logo>voice of reason</Logo>
	</HeaderContainer>
);

export default Header;