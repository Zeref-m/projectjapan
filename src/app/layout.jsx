import "bootstrap/scss/bootstrap.scss";
import ModalProvider from "@/gallery/modal.js";

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <ModalProvider>{children}</ModalProvider>
            </body>
        </html>
    );
}
