import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

type MyDocumentProps = {
    theme: string
}

type MyDocumentInitialProps = DocumentInitialProps & MyDocumentProps


class MyDocument extends Document<MyDocumentProps> {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<MyDocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        const theme = ctx?.req?.headers.cookie
            ? ctx.req.headers.cookie.split('theme=')[1]
            : 'light';
        // parse cookies here
        // %22light%22 to light
        //parse
        const parsedTheme = theme?.replace(/%22/g, '').replace(/%22/g, '');
        return { ...initialProps, theme: parsedTheme }
    }
    render(): JSX.Element {
        console.log(this.props.theme, 'theme is here');
        return (
            <Html>
                <Head>
                </Head>
                <body className={`${this.props.theme === 'light' ? 'dark-theme' : 'dark-theme'}`}>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )
    }
}

export default MyDocument