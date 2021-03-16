import React, { Component } from 'react'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
	render() {
		return (
			<Layout>
				<Sider>Sider</Sider>
				<Layout>
					<Header>Header</Header>
					<Content>Content</Content>
					<Footer>Footer</Footer>
				</Layout>
			</Layout>
		)
	}
}

export default App;