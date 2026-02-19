
        // Tab Switching
        const tabs = document.querySelectorAll('.tab-btn');
        const panes = document.querySelectorAll('.content-pane');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.getAttribute('data-tab');
                
                // Update buttons
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Update panes
                panes.forEach(pane => pane.classList.remove('active'));
                document.getElementById(tabName).classList.add('active');
            });
        });

        // Copy Code Function
        function copyCode(btn) {
            const codeBlock = btn.closest('.code-block');
            const code = codeBlock.querySelector('pre').textContent;
            
            navigator.clipboard.writeText(code).then(() => {
                const originalText = btn.textContent;
                btn.textContent = '✓ COPIED';
                btn.style.color = 'var(--accent-green)';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.color = '';
                }, 2000);
            }).catch(err => {
                alert('Failed to copy code');
                console.error(err);
            });
        }
