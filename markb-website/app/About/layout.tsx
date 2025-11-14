
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-show">

            <div className="grow p-6 md:overflow-show md:p-12">{children}</div>
        </div>
    );
}