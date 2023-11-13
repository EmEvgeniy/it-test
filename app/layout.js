import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
	title: "IT-TEST",
	description:
		"IT-TEST - это команда опытных специалистов по разработке и рекламе и маркетингу. Мы предлагаем полный спектр услуг по созданию и продвижению веб-сайтов, а также по разработке и реализации маркетинговых кампаний.",
	Icons: {
		icon: ["/favicon.ico"],
		apple: ["/favicon.ico"],
		shortcut: ["/favicon.ico"],
	},
	manifest: "/favicon.icon",
	keywords:
		"разработка сайтов, веб-разработка, веб-дизайн, интернет-маркетинг, реклама, продвижение сайтов, SEO, SMM, контекстная реклама, таргетированная реклама, ремаркетинг, email-маркетинг, контент-маркетинг, аналитика, разработка мобильных приложений",
};

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body>
				<Header />
				<>{children}</>
				<Footer />
			</body>
		</html>
	);
}
