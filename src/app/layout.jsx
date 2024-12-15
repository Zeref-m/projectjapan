import "bootstrap/scss/bootstrap.scss";

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}
