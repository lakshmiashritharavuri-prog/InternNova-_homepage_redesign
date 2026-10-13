// InternNova Interactive Logic & Navigation Control

document.addEventListener('DOMContentLoaded', () => {
  // 1. TOP-LEFT BURGER BUTTON & OFFCANVAS DRAWER
  const burgerBtn = document.getElementById('burgerBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const sideDrawer = document.getElementById('sideDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    sideDrawer.classList.remove('-translate-x-full');
    drawerOverlay.classList.remove('opacity-0', 'pointer-events-none');
    drawerOverlay.classList.add('opacity-100');
    document.body.style.overflow = 'hidden'; // prevent scrolling when menu is open
  }

  function closeDrawer() {
    sideDrawer.classList.add('-translate-x-full');
    drawerOverlay.classList.add('opacity-0', 'pointer-events-none');
    drawerOverlay.classList.remove('opacity-100');
    document.body.style.overflow = 'auto';
  }

  if (burgerBtn) burgerBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // 2. DASHBOARD TABS TOGGLING (TASKS, SCHEDULE, CERTIFICATE)
  const tabButtons = document.querySelectorAll('.dash-tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');

      // Update button active state
      tabButtons.forEach(btn => {
        btn.classList.remove('active', 'text-white');
        btn.classList.add('text-slate-400');
      });
      button.classList.add('active', 'text-white');
      button.classList.remove('text-slate-400');

      // Toggle tab views
      tabContents.forEach(content => {
        if (content.id === targetId) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      });
    });
  });

  // 3. FAQ ACCORDION COLLAPSIBLE LOGIC
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('i');
      const isHidden = answer.classList.contains('hidden');

      // Close all other questions
      document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.add('hidden'));
      document.querySelectorAll('.faq-question i').forEach(ic => ic.classList.remove('rotate-180'));

      // Toggle current
      if (isHidden) {
        answer.classList.remove('hidden');
        icon.classList.add('rotate-180');
      }
    });
  });
});

// 4. SUBMISSION MODAL HANDLERS
function openSubmitModal(taskTitle) {
  const modal = document.getElementById('submitModal');
  const taskLabel = document.getElementById('modalTaskName');
  if (taskLabel) taskLabel.innerText = `Submitting: ${taskTitle}`;
  if (modal) modal.classList.remove('hidden');
}

function closeSubmitModal() {
  const modal = document.getElementById('submitModal');
  if (modal) modal.classList.add('hidden');
}

function handleTaskSubmit(e) {
  e.preventDefault();
  alert('🎉 Task successfully submitted! Mentor review will appear on your portal within 24 hours.');
  closeSubmitModal();
}

function previewCertificate() {
  alert('Verified Credential Authenticated:\n• Intern: Ashritha\n• Track: Web Development\n• Serial: IN-2026-WD-8924\n• Status: Active & Valid');
}
