import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

export const metadata = {
	title: "IT-TEST",
	description:
		"IT-TEST - это команда опытных специалистов по разработке и рекламе и маркетингу. Мы предлагаем полный спектр услуг по созданию и продвижению веб-сайтов, а также по разработке и реализации маркетинговых кампаний.",
	Icons: { icon: ["/favicon.ico"],apple: ['/favicon.ico'],shortcut:['/favicon.ico'] },
	manifest:'/favicon.icon'
};

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<Head>
				<meta
					name='keywords'
					content='разработка сайтов, веб-разработка, веб-дизайн, интернет-маркетинг, реклама, продвижение сайтов, SEO, SMM, контекстная реклама, таргетированная реклама, ремаркетинг, email-маркетинг, контент-маркетинг, аналитика, разработка мобильных приложений'
				/>
				<meta
					name='description'
					content='IT-Test - это команда опытных специалистов по разработке и рекламе и маркетингу. Мы предлагаем полный спектр услуг по созданию и продвижению веб-сайтов, а также по разработке и реализации маркетинговых кампаний.'
				/>
			</Head>
			<body>
				<Header />
				<>{children}</>
				<Footer />
			</body>
		</html>
	);
}
