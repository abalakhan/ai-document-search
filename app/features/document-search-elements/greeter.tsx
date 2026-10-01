export function Greeter() {
    return (
        <>
            <div className="greeter w-lg p-3 mx-6">
                <div className="bg-gray-300 p-4 rounded-xl text-gray-900">
                <h4 className="text-sm pb-1">Welcome to the AI Document Search!</h4>
                <ul className="text-xs">
                    <li className="py-1"><span className="px-2">📎</span>upload file</li>
                    <li className="py-2"><span className="p-2">🔄</span>AI processes</li>
                    <li className="py-2"><span className="p-2">❓</span>Ask a question!</li>
                </ul>
                </div>
            </div>
        </>
    );
}