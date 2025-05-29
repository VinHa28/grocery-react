import React, { useState, useEffect } from 'react';

export default function DialogNoLayoutShift() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Hook để lock body scroll mà không gây layout shift
    useEffect(() => {
        if (isDialogOpen) {
            // Tính width của scrollbar
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            
            // Lưu các giá trị ban đầu
            const originalScrollY = window.scrollY;
            const body = document.body;
            const html = document.documentElement;
            
            // Apply styles để lock scroll
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            body.style.top = `-${originalScrollY}px`;
            body.style.left = '0';
            body.style.right = '0';
            
            // Bù trừ scrollbar width để tránh layout shift
            if (scrollbarWidth > 0) {
                body.style.paddingRight = `${scrollbarWidth}px`;
                
                // Cũng apply cho các elements có position fixed
                const fixedElements = document.querySelectorAll('[data-fixed-adjust]');
                fixedElements.forEach(el => {
                    el.style.paddingRight = `${scrollbarWidth}px`;
                });
            }
            
            return () => {
                // Khôi phục tất cả styles
                body.style.overflow = '';
                body.style.position = '';
                body.style.top = '';
                body.style.left = '';
                body.style.right = '';
                body.style.paddingRight = '';
                
                // Khôi phục fixed elements
                const fixedElements = document.querySelectorAll('[data-fixed-adjust]');
                fixedElements.forEach(el => {
                    el.style.paddingRight = '';
                });
                
                // Khôi phục scroll position
                window.scrollTo(0, originalScrollY);
            };
        }
    }, [isDialogOpen]);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    // Content dài để test scroll
    const longContent = Array.from({ length: 50 }, (_, i) => (
        <div key={i} className="p-4 border-b border-gray-200">
            <h3 className="font-semibold">Section {i + 1}</h3>
            <p className="text-gray-600">
                Nội dung dài để test scroll. Chú ý không có hiện tượng nháy màn hình
                khi mở/đóng dialog vì chúng ta đã bù trừ scrollbar width.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2">
                {Array.from({ length: 3 }, (_, j) => (
                    <div key={j} className="bg-blue-100 p-2 rounded text-center text-sm">
                        Item {j + 1}
                    </div>
                ))}
            </div>
        </div>
    ));

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header cố định - thêm data-fixed-adjust để auto adjust */}
            <header 
                data-fixed-adjust
                className="sticky top-0 bg-white shadow-sm z-40 p-4 border-b"
            >
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">No Layout Shift Dialog</h1>
                    <div className="flex gap-2">
                        <button
                            onClick={openDialog}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Open Dialog
                        </button>
                        <div className="px-3 py-2 bg-gray-100 rounded text-sm">
                            Scroll xuống rồi mở dialog
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar cố định - cũng cần adjust */}
            <aside 
                data-fixed-adjust
                className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded shadow-lg z-30"
            >
                <div className="text-sm font-medium mb-2">Fixed Sidebar</div>
                <div className="text-xs text-gray-600">
                    Element này cũng sẽ được adjust để không bị shift
                </div>
            </aside>

            {/* Main content */}
            <main className="max-w-4xl mx-auto">
                <div className="p-4">
                    <div className="bg-yellow-100 p-4 rounded mb-4">
                        <h2 className="font-semibold text-yellow-800 mb-2">
                            🎯 Test Instructions:
                        </h2>
                        <ol className="text-sm text-yellow-700 space-y-1">
                            <li>1. Scroll xuống một đoạn</li>
                            <li>2. Mở dialog và chú ý không có hiện tượng "giật" màn hình</li>
                            <li>3. Scroll trong dialog vẫn hoạt động bình thường</li>
                            <li>4. Đóng dialog và scroll position được khôi phục</li>
                        </ol>
                    </div>
                </div>
                {longContent}
            </main>

            {/* Dialog Modal */}
            {isDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={closeDialog}
                    />
                    
                    {/* Dialog Content */}
                    <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[80vh] flex flex-col">
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-lg font-semibold">Smooth Dialog</h2>
                            <button
                                onClick={closeDialog}
                                className="text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100"
                            >
                                ×
                            </button>
                        </div>
                        
                        {/* Scrollable Content */}
                        <div style={{
                            overflow: 'auto',
                            maxHeight: '500px',
                        }} className="flex-1 overflow-y-auto p-4">
                            <p className="mb-4 text-green-700 bg-green-50 p-3 rounded">
                                ✅ Background không scroll, không có layout shift, 
                                nhưng bạn vẫn có thể scroll trong dialog này.
                            </p>
                            
                            {Array.from({ length: 25 }, (_, i) => (
                                <div key={i} className="mb-4 p-3 bg-gray-50 rounded">
                                    <h4 className="font-medium">Dialog Content {i + 1}</h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Scroll trong dialog hoạt động bình thường. 
                                        Background đã bị lock mà không gây hiện tượng nháy màn hình
                                        vì chúng ta đã bù trừ scrollbar width bằng padding-right.
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        {/* Footer */}
                        <div className="flex justify-end gap-2 p-4 border-t bg-gray-50">
                            <button
                                onClick={closeDialog}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={closeDialog}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}