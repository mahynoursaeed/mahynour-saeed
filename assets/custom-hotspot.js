/**
 * Vanilla JavaScript Hotspot Modal Script
 * No jQuery used as per evaluation requirements.
 */
document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('hotspot-modal-overlay');
  const closeBtn = document.getElementById('modal-close-trigger');
  
  // Modal target elements
  const targetImg = document.getElementById('modal-target-img');
  const targetTitle = document.getElementById('modal-target-title');
  const targetPrice = document.getElementById('modal-target-price');
  const targetDesc = document.getElementById('modal-target-desc');

  // Select all hotspot pins
  const hotspotPins = document.querySelectorAll('.hotspot-pin');

  // Function to open modal and populate data
  const openModal = (pin) => {
    const title = pin.getAttribute('data-title') || '';
    const price = pin.getAttribute('data-price') || '';
    const imgSrc = pin.getAttribute('data-image') || '';
    const desc = pin.getAttribute('data-description') || '';

    targetTitle.textContent = title;
    targetPrice.textContent = price;
    targetDesc.textContent = desc;
    
    if (imgSrc) {
      targetImg.src = imgSrc;
      targetImg.style.display = 'block';
    } else {
      targetImg.style.display = 'none';
    }

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
  };

  // Function to close modal
  const closeModal = () => {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
  };

  // Event Listeners for pins
  hotspotPins.forEach(pin => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(pin);
    });
  });

  // Close triggers
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Close when clicking outside modal box
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
});