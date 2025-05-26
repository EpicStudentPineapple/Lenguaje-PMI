let countdownTimer;
        let timeLeft = 60;

        function startCountdown() {
            const timerEl = document.getElementById('timer');
            const resendBtn = document.getElementById('resend-btn');
            
            countdownTimer = setInterval(() => {
                timeLeft--;
                timerEl.textContent = timeLeft;
                
                if (timeLeft <= 0) {
                    clearInterval(countdownTimer);
                    resendBtn.disabled = false;
                    resendBtn.innerHTML = '<i class="fas fa-redo" style="margin-right: 0.5rem;"></i>Reenviar Correo';
                    timerEl.textContent = '';
                    timerEl.parentElement.innerHTML = 'Puedes solicitar un nuevo enlace de recuperación.';
                }
            }, 1000);
        }

        document.getElementById('recoveryForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const sendBtn = document.getElementById('send-btn');
            
            if (!email) {
                alert('Por favor, ingresa tu correo electrónico.');
                return;
            }
            
            // Simular envío
            sendBtn.disabled = true;
            sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 0.5rem;"></i>Enviando...';
            
            setTimeout(() => {
                // Mostrar estado de éxito
                document.getElementById('recovery-form').classList.add('hidden');
                document.getElementById('success-state').classList.add('active');
                document.getElementById('sent-email').textContent = email;
                
                // Iniciar countdown
                startCountdown();
            }, 2000);
        });

        document.getElementById('resend-btn').addEventListener('click', function() {
            const email = document.getElementById('sent-email').textContent;
            const resendBtn = this;
            
            resendBtn.disabled = true;
            resendBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 0.5rem;"></i>Reenviando...';
            
            setTimeout(() => {
                // Reiniciar timer
                timeLeft = 60;
                startCountdown();
                
                alert('Correo reenviado exitosamente.');
            }, 2000);
        });