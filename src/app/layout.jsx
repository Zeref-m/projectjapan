import "bootstrap/scss/bootstrap.scss";
import BootstrapProvider from "../providers/bootstrap";

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <BootstrapProvider>{children}</BootstrapProvider>
            </body>
        </html>
    );
}
