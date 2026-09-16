const categoryLabels = {
  templates: 'Templates',
  wrappers: 'Wrappers',
  flowers: 'Flowers',
  fillers: 'Fillers',
  accessories: 'Accessories',
  seasonal: 'Seasonal',
  others: 'Others',
  images: 'Images'
};

const colorOptions = ['all', 'red', 'pink', 'white', 'yellow', 'purple', 'blue', 'orange', 'green'];

const backgroundOptions = [
  { name: 'Cream', value: '#fffaf7' },
  { name: 'White', value: '#ffffff' },
  { name: 'Blush Pink', value: '#fce7ef' },
  { name: 'Lavender', value: '#f1ebff' },
  { name: 'Light Blue', value: '#eaf5ff' },
  { name: 'Sage', value: '#edf4eb' },
  { name: 'Transparent', value: 'transparent' }
];

const messageCardStyles = ['Classic', 'Rose', 'Pastel', 'Vintage', 'Midnight', 'Minimal'];

const assets = [
  { id: 'template-romantic', name: 'Romantic Roses', category: 'templates', color: 'pink', emoji: '💐', template: 'romantic-roses' },
  { id: 'template-spring', name: 'Spring Garden', category: 'templates', color: 'green', emoji: '🌼', template: 'spring-garden' },
  { id: 'template-purple', name: 'Purple Dream', category: 'templates', color: 'purple', emoji: '🪻', template: 'purple-dream' },
  { id: 'template-sunflower', name: 'Sunflower Sunshine', category: 'templates', color: 'yellow', emoji: '🌻', template: 'sunflower-sunshine' },
  { id: 'template-pastel', name: 'Pastel Bouquet', category: 'templates', color: 'pink', emoji: '🌷', template: 'pastel-bouquet' },
  { id: 'template-white', name: 'Simple White Bouquet', category: 'templates', color: 'white', emoji: '🌿', template: 'simple-white' },

  { id: 'wrapper-classic', name: 'Classic Paper', category: 'wrappers', color: 'white', emoji: '📜', wrapperType: 'paper' },
  { id: 'wrapper-kraft', name: 'Kraft Paper', category: 'wrappers', color: 'brown', emoji: '🧾', wrapperType: 'kraft' },
  { id: 'wrapper-pink', name: 'Pink Paper', category: 'wrappers', color: 'pink', emoji: '🎀', wrapperType: 'pink' },
  { id: 'wrapper-white', name: 'White Paper', category: 'wrappers', color: 'white', emoji: '❄️', wrapperType: 'white' },
  { id: 'wrapper-newspaper', name: 'Newspaper Wrap', category: 'wrappers', color: 'gray', emoji: '📰', wrapperType: 'newspaper' },
  { id: 'wrapper-luxury', name: 'Black Luxury Wrap', category: 'wrappers', color: 'black', emoji: '🖤', wrapperType: 'luxury' },
  { id: 'wrapper-pastel', name: 'Pastel Wrap', category: 'wrappers', color: 'pink', emoji: '🩷', wrapperType: 'pastel' },
  { id: 'wrapper-heart', name: 'Heart Wrap', category: 'wrappers', color: 'pink', emoji: '💞', wrapperType: 'heart' },
  { id: 'wrapper-ribbon', name: 'Ribbon Wrap', category: 'wrappers', color: 'pink', emoji: '🎗️', wrapperType: 'ribbon' },
  { id: 'wrapper-basket', name: 'Floral Basket', category: 'wrappers', color: 'green', emoji: '🧺', wrapperType: 'basket' },
  { id: 'wrapper-box', name: 'Flower Box', category: 'wrappers', color: 'white', emoji: '📦', wrapperType: 'box' },
  { id: 'wrapper-jar', name: 'Mason Jar', category: 'wrappers', color: 'white', emoji: '🫙', wrapperType: 'jar' },
  { id: 'wrapper-vase', name: 'Ceramic Vase', category: 'wrappers', color: 'purple', emoji: '🏺', wrapperType: 'vase' },

  { id: 'rose-red', name: 'Red Rose', category: 'flowers', color: 'red', emoji: '🌹' },
  { id: 'rose-pink', name: 'Pink Rose', category: 'flowers', color: 'pink', emoji: '🌹' },
  { id: 'rose-white', name: 'White Rose', category: 'flowers', color: 'white', emoji: '🌹' },
  { id: 'rose-yellow', name: 'Yellow Rose', category: 'flowers', color: 'yellow', emoji: '🌹' },
  { id: 'tulip-pink', name: 'Pink Tulip', category: 'flowers', color: 'pink', emoji: '🌷' },
  { id: 'tulip-purple', name: 'Purple Tulip', category: 'flowers', color: 'purple', emoji: '🌷' },
  { id: 'tulip-white', name: 'White Tulip', category: 'flowers', color: 'white', emoji: '🌷' },
  { id: 'tulip-yellow', name: 'Yellow Tulip', category: 'flowers', color: 'yellow', emoji: '🌷' },
  { id: 'daisy', name: 'Daisy', category: 'flowers', color: 'white', emoji: '🌼' },
  { id: 'sunflower', name: 'Sunflower', category: 'flowers', color: 'yellow', emoji: '🌻' },
  { id: 'lily', name: 'Lily', category: 'flowers', color: 'white', emoji: '🪷' },
  { id: 'peony', name: 'Peony', category: 'flowers', color: 'pink', emoji: '🌺' },
  { id: 'lavender-bloom', name: 'Lavender', category: 'flowers', color: 'purple', emoji: '🪻' },
  { id: 'babys-breath', name: 'Baby\'s Breath', category: 'flowers', color: 'white', emoji: '❄️' },
  { id: 'orchid', name: 'Orchid', category: 'flowers', color: 'purple', emoji: '🪷' },
  { id: 'carnation', name: 'Carnation', category: 'flowers', color: 'pink', emoji: '🌺' },
  { id: 'hydrangea', name: 'Hydrangea', category: 'flowers', color: 'blue', emoji: '💮' },
  { id: 'chrysanthemum', name: 'Chrysanthemum', category: 'flowers', color: 'orange', emoji: '🌼' },

  { id: 'filler-babys-breath', name: 'Baby\'s Breath', category: 'fillers', color: 'white', emoji: '✨' },
  { id: 'filler-fern', name: 'Fern', category: 'fillers', color: 'green', emoji: '🌿' },
  { id: 'filler-eucalyptus', name: 'Eucalyptus', category: 'fillers', color: 'green', emoji: '🌱' },
  { id: 'filler-leaves', name: 'Small Leaves', category: 'fillers', color: 'green', emoji: '🍃' },
  { id: 'filler-lavender', name: 'Lavender', category: 'fillers', color: 'purple', emoji: '🪻' },
  { id: 'filler-greenery', name: 'Greenery', category: 'fillers', color: 'green', emoji: '🌿' },
  { id: 'filler-tiny-flowers', name: 'Tiny White Flowers', category: 'fillers', color: 'white', emoji: '🌼' },
  { id: 'filler-branches', name: 'Branches', category: 'fillers', color: 'green', emoji: '🌳' },

  { id: 'accessory-ribbon', name: 'Ribbon', category: 'accessories', color: 'pink', emoji: '🎀' },
  { id: 'accessory-bow', name: 'Bow', category: 'accessories', color: 'pink', emoji: '🎀' },
  { id: 'accessory-heart', name: 'Heart', category: 'accessories', color: 'red', emoji: '💗' },
  { id: 'accessory-butterfly', name: 'Butterfly', category: 'accessories', color: 'purple', emoji: '🦋' },
  { id: 'accessory-crown', name: 'Crown', category: 'accessories', color: 'gold', emoji: '👑' },
  { id: 'accessory-star', name: 'Star', category: 'accessories', color: 'yellow', emoji: '⭐' },
  { id: 'accessory-sparkles', name: 'Sparkles', category: 'accessories', color: 'pink', emoji: '✨' },
  { id: 'accessory-letter', name: 'Love Letter', category: 'accessories', color: 'pink', emoji: '💌' },
  { id: 'accessory-teddy', name: 'Teddy Bear', category: 'accessories', color: 'brown', emoji: '🧸' },
  { id: 'accessory-tag', name: 'Gift Tag', category: 'accessories', color: 'white', emoji: '🏷️' },

  { id: 'seasonal-hearts', name: 'Hearts', category: 'seasonal', color: 'red', emoji: '💖' },
  { id: 'seasonal-love-ribbon', name: 'Love Ribbon', category: 'seasonal', color: 'pink', emoji: '🎁' },
  { id: 'seasonal-cupid', name: 'Cupid Decorations', category: 'seasonal', color: 'pink', emoji: '💘' },
  { id: 'seasonal-candy-cane', name: 'Candy Cane', category: 'seasonal', color: 'red', emoji: '🍭' },
  { id: 'seasonal-snowflake', name: 'Snowflake', category: 'seasonal', color: 'blue', emoji: '❄️' },
  { id: 'seasonal-christmas-ribbon', name: 'Christmas Ribbon', category: 'seasonal', color: 'red', emoji: '🎀' },
  { id: 'seasonal-ornaments', name: 'Ornaments', category: 'seasonal', color: 'gold', emoji: '🎄' },
  { id: 'seasonal-balloons', name: 'Balloons', category: 'seasonal', color: 'pink', emoji: '🎈' },
  { id: 'seasonal-birthday-sign', name: 'Birthday Sign', category: 'seasonal', color: 'yellow', emoji: '🎉' },
  { id: 'seasonal-cake', name: 'Cake Decoration', category: 'seasonal', color: 'pink', emoji: '🎂' },
  { id: 'seasonal-confetti', name: 'Confetti', category: 'seasonal', color: 'yellow', emoji: '🎊' },
  { id: 'seasonal-cap', name: 'Graduation Cap', category: 'seasonal', color: 'purple', emoji: '🎓' },
  { id: 'seasonal-diploma', name: 'Diploma', category: 'seasonal', color: 'white', emoji: '📜' },
  { id: 'seasonal-congrats', name: 'Congratulations Sign', category: 'seasonal', color: 'green', emoji: '🎊' },

  { id: 'other-jar', name: 'Mini Vase', category: 'others', color: 'white', emoji: '🍼' },
  { id: 'other-candle', name: 'Candle', category: 'others', color: 'yellow', emoji: '🕯️' },
  { id: 'other-bear', name: 'Bloom Bear', category: 'others', color: 'pink', emoji: '🧸' },
  { id: 'other-bumblebee', name: 'Bee', category: 'others', color: 'yellow', emoji: '🐝' },

  { id: 'upload-image', name: 'Upload Image', category: 'images', color: 'all', emoji: '🖼️' }
];

const state = {
  category: 'flowers',
  colorFilter: 'all',
  search: '',
  background: '#fffaf7',
  selectedItemId: null,
  messageCardStyle: 'Classic',
  message: {
    title: 'For Someone Special',
    recipient: 'My Love',
    sender: 'From Me',
    text: 'Just a little bouquet to remind you how special you are. 🌷'
  },
  canvasItems: [],
  history: [],
  historyIndex: -1,
  activeDrag: null
};

const refs = {};

function init() {
  refs.assetSearch = document.getElementById('assetSearch');
  refs.colorFilter = document.getElementById('colorFilter');
  refs.categoryTabs = document.getElementById('categoryTabs');
  refs.assetGrid = document.getElementById('assetGrid');
  refs.bouquetCanvas = document.getElementById('bouquetCanvas');
  refs.editPanelContent = document.getElementById('editPanelContent');
  refs.backgroundGrid = document.getElementById('backgroundGrid');
  refs.customBackgroundColor = document.getElementById('customBackgroundColor');
  refs.previewModal = document.getElementById('previewModal');
  refs.restoreModal = document.getElementById('restoreModal');
  refs.previewCanvas = document.getElementById('previewCanvas');
  refs.messageCounter = document.getElementById('messageCounter');
  refs.bouquetTitle = document.getElementById('bouquetTitle');
  refs.bouquetRecipient = document.getElementById('bouquetRecipient');
  refs.bouquetSender = document.getElementById('bouquetSender');
  refs.bouquetMessage = document.getElementById('bouquetMessage');
  refs.previewTitle = document.getElementById('previewTitle');
  refs.previewRecipient = document.getElementById('previewRecipient');
  refs.previewSender = document.getElementById('previewSender');
  refs.previewMessageText = document.getElementById('previewMessageText');
  refs.messageCardStyles = document.getElementById('messageCardStyles');
  refs.toast = document.getElementById('toast');

  refs.bouquetTitle.value = state.message.title;
  refs.bouquetRecipient.value = state.message.recipient;
  refs.bouquetSender.value = state.message.sender;
  refs.bouquetMessage.value = state.message.text;
  refs.customBackgroundColor.value = '#fffaf7';
  refs.messageCounter.textContent = `${state.message.text.length}/260`;

  bindGlobalEvents();
  renderCategoryTabs();
  renderColorFilters();
  renderBackgroundOptions();
  renderMessageCardStyles();
  renderAssets();
  renderCanvas();
  renderEditPanel();
  updateMessagePreview();
  pushHistory();
  checkSavedBouquet();
}

function bindGlobalEvents() {
  refs.assetSearch.addEventListener('input', (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderAssets();
  });

  refs.categoryTabs.addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    state.category = button.dataset.category;
    renderCategoryTabs();
    renderAssets();
  });

  refs.colorFilter.addEventListener('click', (event) => {
    const button = event.target.closest('[data-color]');
    if (!button) return;
    state.colorFilter = button.dataset.color;
    renderColorFilters();
    renderAssets();
  });

  refs.assetGrid.addEventListener('click', (event) => {
    const action = event.target.closest('[data-add-asset]');
    if (!action) return;
    const assetId = action.dataset.addAsset;
    const asset = assets.find((item) => item.id === assetId);
    if (!asset) return;

    if (asset.category === 'images' && asset.id === 'upload-image') {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.addEventListener('change', (changeEvent) => {
        const file = changeEvent.target.files && changeEvent.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (loadEvent) => {
          const imageSrc = loadEvent.target.result;
          const uploadAsset = {
            id: `upload-${Date.now()}`,
            name: file.name || 'Uploaded Image',
            category: 'images',
            color: 'all',
            emoji: '🖼️',
            image: imageSrc,
            isUploaded: true
          };
          addItemToCanvas(uploadAsset, { x: 300, y: 300, width: 180, height: 180 });
          pushHistory();
        };
        reader.readAsDataURL(file);
      });
      input.click();
      return;
    }

    if (asset.template) {
      applyTemplate(asset.template);
      return;
    }

    addItemToCanvas(asset, { x: 300, y: 300, width: 120, height: 120 });
    pushHistory();
  });

  refs.bouquetCanvas.addEventListener('pointerdown', handleCanvasPointerDown);
  window.addEventListener('pointermove', handlePointerMove);
  window.addEventListener('pointerup', handlePointerUp);
  window.addEventListener('keydown', handleKeydown);

  refs.editPanelContent.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    if (action === 'rotate-left') rotateSelected(-15);
    if (action === 'rotate-right') rotateSelected(15);
    if (action === 'flip-h') flipSelected('horizontal');
    if (action === 'flip-v') flipSelected('vertical');
    if (action === 'duplicate') duplicateSelected();
    if (action === 'bring-forward') bringForward();
    if (action === 'send-backward') sendBackward();
    if (action === 'delete') deleteSelected();
  });

  refs.editPanelContent.addEventListener('input', (event) => {
    const range = event.target.closest('input[type="range"]');
    if (!range) return;
    const selected = getSelectedItem();
    if (!selected) return;

    const field = range.dataset.field;
    if (!field) return;

    if (field === 'width') {
      selected.width = Number(range.value);
      if (selected.category === 'wrappers') {
        selected.height = Number(Math.max(110, selected.width * 1.38));
      } else {
        selected.height = Number(range.value);
      }
    }

    if (field === 'rotation') {
      selected.rotation = Number(range.value);
    }

    if (field === 'opacity') {
      selected.opacity = Number(range.value) / 100;
    }

    renderCanvas();
    renderEditPanel();
  });

  refs.backgroundGrid.addEventListener('click', (event) => {
    const swatch = event.target.closest('[data-background]');
    if (!swatch) return;
    state.background = swatch.dataset.background;
    applyBackground();
    renderBackgroundOptions();
    pushHistory();
  });

  refs.customBackgroundColor.addEventListener('input', (event) => {
    state.background = event.target.value;
    applyBackground();
    renderBackgroundOptions();
    pushHistory();
  });

  refs.bouquetTitle.addEventListener('input', () => {
    state.message.title = refs.bouquetTitle.value;
    updateMessagePreview();
  });

  refs.bouquetRecipient.addEventListener('input', () => {
    state.message.recipient = refs.bouquetRecipient.value;
    updateMessagePreview();
  });

  refs.bouquetSender.addEventListener('input', () => {
    state.message.sender = refs.bouquetSender.value;
    updateMessagePreview();
  });

  refs.bouquetMessage.addEventListener('input', () => {
    state.message.text = refs.bouquetMessage.value;
    refs.messageCounter.textContent = `${refs.bouquetMessage.value.length}/260`;
    updateMessagePreview();
  });

  refs.messageCardStyles.addEventListener('click', (event) => {
    const variant = event.target.closest('[data-card-style]');
    if (!variant) return;
    state.messageCardStyle = variant.dataset.cardStyle;
    renderMessageCardStyles();
    updateMessagePreview();
  });

  document.getElementById('previewBtn').addEventListener('click', showPreview);
  document.getElementById('saveBtn').addEventListener('click', saveBouquet);
  document.getElementById('newBouquetBtn').addEventListener('click', () => newBouquet());
  document.getElementById('undoBtn').addEventListener('click', undo);
  document.getElementById('redoBtn').addEventListener('click', redo);
  document.getElementById('downloadBouquetBtn').addEventListener('click', downloadBouquet);
  document.getElementById('restoreBouquetBtn').addEventListener('click', () => {
    loadBouquet();
    hideModal('restoreModal');
  });

  document.getElementById('startFreshBtn').addEventListener('click', () => {
    localStorage.removeItem('virtualBouquetSave');
    hideModal('restoreModal');
    newBouquet();
  });

  document.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', () => hideModal(button.dataset.closeModal));
  });
}

function renderCategoryTabs() {
  refs.categoryTabs.innerHTML = Object.entries(categoryLabels)
    .map(([key, value]) => `
      <button type="button" class="category-tab ${state.category === key ? 'active' : ''}" data-category="${key}">${value}</button>
    `)
    .join('');
}

function renderColorFilters() {
  refs.colorFilter.innerHTML = ['all', 'red', 'pink', 'white', 'yellow', 'purple', 'blue', 'orange', 'green']
    .map((color) => {
      const label = color === 'all' ? 'All' : capitalize(color);
      return `
        <button type="button" data-color="${color}" class="${state.colorFilter === color ? 'active' : ''}">${label}</button>
      `;
    })
    .join('');
}

function renderBackgroundOptions() {
  refs.backgroundGrid.innerHTML = backgroundOptions
    .map((option) => {
      const activeClass = state.background === option.value ? 'active' : '';
      const transparentClass = option.value === 'transparent' ? 'transparent' : '';
      return `
        <button type="button" class="background-swatch ${activeClass} ${transparentClass}" data-background="${option.value}" style="background:${option.value === 'transparent' ? '#fff' : option.value};" title="${option.name}"></button>
      `;
    })
    .join('');

  refs.customBackgroundColor.value = isHexColor(state.background) ? state.background : '#fffaf7';
}

function renderMessageCardStyles() {
  refs.messageCardStyles.innerHTML = messageCardStyles
    .map((style) => `
      <button type="button" class="message-card-button ${state.messageCardStyle === style ? 'active' : ''}" data-card-style="${style}">${style}</button>
    `)
    .join('');
}

function renderAssets() {
  const filteredAssets = assets.filter((asset) => {
    const categoryMatch = state.category === asset.category;
    const searchMatch = !state.search || asset.name.toLowerCase().includes(state.search);
    const colorMatch = state.colorFilter === 'all' || asset.color === state.colorFilter;
    return categoryMatch && searchMatch && colorMatch;
  });

  if (!filteredAssets.length) {
    refs.assetGrid.innerHTML = '<div class="empty-editor">No items match your search.</div>';
    return;
  }

  refs.assetGrid.innerHTML = filteredAssets
    .map((asset) => {
      const assetLabel = asset.category === 'images' && asset.id === 'upload-image' ? 'Upload' : 'Add';
      return `
        <article class="asset-card" data-asset-id="${asset.id}">
          <div class="asset-preview">${asset.emoji || '🌸'}</div>
          <h4>${asset.name}</h4>
          <div class="asset-meta">
            <span class="asset-tag">${capitalize(asset.color || 'all')}</span>
            <button type="button" class="asset-add-btn" data-add-asset="${asset.id}">${assetLabel}</button>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderCanvas() {
  const hasItems = state.canvasItems.length > 0;
  refs.bouquetCanvas.classList.toggle('transparent', state.background === 'transparent');
  refs.bouquetCanvas.style.background = state.background === 'transparent' ? '' : state.background;

  refs.bouquetCanvas.innerHTML = '';

  if (!hasItems) {
    refs.bouquetCanvas.innerHTML = `
      <div class="canvas-empty">
        <div class="empty-icon">🌸</div>
        <h3>Start creating your bouquet 🌸</h3>
        <p>Choose a wrapper, flower, or decoration from the menu.</p>
      </div>
    `;
    return;
  }

  const sortedItems = [...state.canvasItems].sort((a, b) => a.zIndex - b.zIndex);

  sortedItems.forEach((item) => {
    const itemElement = document.createElement('div');
    itemElement.className = `bouquet-item ${state.selectedItemId === item.id ? 'selected' : ''}`;
    itemElement.dataset.id = item.id;
    itemElement.style.left = `${item.x}px`;
    itemElement.style.top = `${item.y}px`;
    itemElement.style.width = `${item.width}px`;
    itemElement.style.height = `${item.height}px`;
    itemElement.style.zIndex = item.zIndex;
    itemElement.style.opacity = item.opacity;
    itemElement.style.transform = `rotate(${item.rotation}deg) scaleX(${item.flipX ? -1 : 1}) scaleY(${item.flipY ? -1 : 1})`;

    const visual = getItemVisual(item);
    itemElement.innerHTML = visual;

    if (state.selectedItemId === item.id) {
      itemElement.insertAdjacentHTML('beforeend', '<div class="rotate-handle" aria-label="Rotate item"></div><div class="resize-handle" aria-label="Resize item"></div>');
    }

    refs.bouquetCanvas.appendChild(itemElement);
  });
}

function getItemVisual(item) {
  if (item.kind === 'image') {
    return `
      <div class="item-visual">
        <img src="${item.src}" alt="${escapeHtml(item.name)}" draggable="false" />
      </div>
    `;
  }

  if (item.kind === 'wrapper') {
    const tone = item.color || 'pink';

    return `
      <div class="item-visual wrapper-visual wrapper-${tone}" data-tone="${tone}">
        <div class="paper paper-back paper-back-left"></div>
        <div class="paper paper-back paper-back-right"></div>
        <div class="paper paper-middle paper-middle-left"></div>
        <div class="paper paper-middle paper-middle-right"></div>
        <div class="paper paper-front"></div>
        <div class="wrapper-fold wrapper-fold-left"></div>
        <div class="wrapper-fold wrapper-fold-right"></div>
        <div class="wrapper-ribbon"></div>
        <div class="wrapper-bow" aria-hidden="true">
          <span class="bow-left"></span>
          <span class="bow-center"></span>
          <span class="bow-right"></span>
        </div>
      </div>
    `;
  }

  const asset = getAssetById(item.assetId) || { emoji: '🌸', name: item.name };
  return `
    <div class="item-visual">
      <div class="item-emoji" aria-label="${escapeHtml(asset.name)}">${asset.emoji}</div>
    </div>
  `;
}

function renderEditPanel() {
  const selected = getSelectedItem();

  if (!selected) {
    refs.editPanelContent.innerHTML = '<div class="empty-editor">Select an item to edit.</div>';
    return;
  }

  const itemName = selected.name || 'Unnamed Item';
  refs.editPanelContent.innerHTML = `
    <div class="selected-item-card">
      <div class="info-row">
        <span>Item Name</span>
        <strong>${escapeHtml(itemName)}</strong>
      </div>

      <label class="slider-block">
        <div class="slider-header">
          <span>Size</span>
          <strong>${Math.round(selected.width)}</strong>
        </div>
        <input type="range" min="40" max="260" value="${Math.round(selected.width)}" data-field="width" />
      </label>

      <label class="slider-block">
        <div class="slider-header">
          <span>Rotation</span>
          <strong>${Math.round(selected.rotation)}°</strong>
        </div>
        <input type="range" min="0" max="360" value="${Math.round(selected.rotation)}" data-field="rotation" />
      </label>

      <label class="slider-block">
        <div class="slider-header">
          <span>Opacity</span>
          <strong>${Math.round(selected.opacity * 100)}%</strong>
        </div>
        <input type="range" min="20" max="100" value="${Math.round(selected.opacity * 100)}" data-field="opacity" />
      </label>

      <div class="toolbar-grid">
        <button type="button" class="action-btn" data-action="rotate-left">Rotate Left</button>
        <button type="button" class="action-btn" data-action="rotate-right">Rotate Right</button>
        <button type="button" class="action-btn" data-action="flip-h">Flip Horizontal</button>
        <button type="button" class="action-btn" data-action="flip-v">Flip Vertical</button>
      </div>

      <div class="layer-group">
        <button type="button" class="layer-btn" data-action="bring-forward">Bring Forward</button>
        <button type="button" class="layer-btn" data-action="send-backward">Send Backward</button>
      </div>

      <div class="button-group">
        <button type="button" class="action-btn" data-action="duplicate">Duplicate</button>
        <button type="button" class="action-btn" data-action="delete">Delete</button>
      </div>
    </div>
  `;
}

function addItemToCanvas(asset, options = {}) {
  const defaultSize = getDefaultSize(asset);
  const baseWidth = options.width || defaultSize.width;
  const baseHeight = options.height || defaultSize.height;
  const item = {
    id: `item-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    assetId: asset.id,
    name: asset.name,
    category: asset.category,
    color: asset.color,
    kind: asset.kind || (asset.category === 'wrappers' ? 'wrapper' : asset.isUploaded ? 'image' : 'flower'),
    opacity: 1,
    rotation: 0,
    flipX: false,
    flipY: false,
    width: baseWidth,
    height: baseHeight,
    x: options.x ?? 300,
    y: options.y ?? 300,
    zIndex: state.canvasItems.length + 1,
    src: asset.image || '',
    isUploaded: !!asset.isUploaded
  };

  if (asset.category === 'wrappers') {
    state.canvasItems = state.canvasItems.filter((canvasItem) => canvasItem.category !== 'wrappers');
    item.zIndex = 1;
  }

  state.canvasItems.push(item);
  state.selectedItemId = item.id;

  renderCanvas();
  renderEditPanel();
}

function applyTemplate(templateName) {
  const templateMap = {
    'romantic-roses': [
      { assetId: 'rose-pink', x: 200, y: 200, width: 108, height: 108 },
      { assetId: 'rose-red', x: 340, y: 220, width: 110, height: 110 },
      { assetId: 'rose-white', x: 270, y: 290, width: 95, height: 95 },
      { assetId: 'rose-pink', x: 250, y: 180, width: 90, height: 90 },
      { assetId: 'filler-babys-breath', x: 300, y: 320, width: 180, height: 100 },
      { assetId: 'accessory-heart', x: 300, y: 150, width: 66, height: 66 }
    ],
    'spring-garden': [
      { assetId: 'daisy', x: 200, y: 260, width: 90, height: 90 },
      { assetId: 'sunflower', x: 330, y: 260, width: 110, height: 110 },
      { assetId: 'tulip-yellow', x: 270, y: 200, width: 90, height: 90 },
      { assetId: 'filler-fern', x: 300, y: 360, width: 220, height: 110 },
      { assetId: 'filler-eucalyptus', x: 200, y: 330, width: 120, height: 110 }
    ],
    'purple-dream': [
      { assetId: 'lavender-bloom', x: 240, y: 220, width: 118, height: 118 },
      { assetId: 'orchid', x: 340, y: 200, width: 110, height: 110 },
      { assetId: 'tulip-purple', x: 200, y: 310, width: 100, height: 100 },
      { assetId: 'filler-lavender', x: 300, y: 335, width: 180, height: 110 },
      { assetId: 'accessory-butterfly', x: 380, y: 150, width: 80, height: 80 }
    ],
    'sunflower-sunshine': [
      { assetId: 'sunflower', x: 240, y: 240, width: 160, height: 160 },
      { assetId: 'rose-yellow', x: 175, y: 300, width: 95, height: 95 },
      { assetId: 'rose-yellow', x: 330, y: 300, width: 95, height: 95 },
      { assetId: 'daisy', x: 280, y: 170, width: 88, height: 88 },
      { assetId: 'filler-leaves', x: 300, y: 360, width: 220, height: 110 }
    ],
    'pastel-bouquet': [
      { assetId: 'peony', x: 200, y: 200, width: 100, height: 100 },
      { assetId: 'hydrangea', x: 340, y: 220, width: 110, height: 110 },
      { assetId: 'tulip-pink', x: 260, y: 320, width: 100, height: 100 },
      { assetId: 'filler-tiny-flowers', x: 300, y: 360, width: 200, height: 120 },
      { assetId: 'accessory-ribbon', x: 300, y: 130, width: 80, height: 80 }
    ],
    'simple-white': [
      { assetId: 'rose-white', x: 220, y: 210, width: 100, height: 100 },
      { assetId: 'daisy', x: 330, y: 210, width: 110, height: 110 },
      { assetId: 'babys-breath', x: 300, y: 332, width: 220, height: 110 },
      { assetId: 'accessory-bow', x: 300, y: 125, width: 84, height: 84 }
    ]
  };

  const chosen = templateMap[templateName] || templateMap['romantic-roses'];
  const templateAssets = chosen.map((entry) => {
    const asset = getAssetById(entry.assetId) || { id: entry.assetId, name: 'Flower', color: 'pink', emoji: '🌸' };
    return {
      ...asset,
      kind: asset.category === 'wrappers' ? 'wrapper' : 'flower',
      name: asset.name
    };
  });

  state.canvasItems = [];
  state.selectedItemId = null;

  templateAssets.forEach((asset, index) => {
    const defaultSize = getDefaultSize(asset);
    const item = {
      id: `template-item-${Date.now()}-${index}`,
      assetId: asset.id,
      name: asset.name,
      category: asset.category,
      color: asset.color,
      kind: asset.kind,
      opacity: 1,
      rotation: 0,
      flipX: false,
      flipY: false,
      width: chosen[index].width || defaultSize.width,
      height: chosen[index].height || defaultSize.height,
      x: chosen[index].x || 300,
      y: chosen[index].y || 300,
      zIndex: index + 1,
      src: asset.image || '',
      isUploaded: false
    };

    state.canvasItems.push(item);
  });

  state.selectedItemId = state.canvasItems[0]?.id || null;
  renderCanvas();
  renderEditPanel();
  pushHistory();
}

function getDefaultSize(asset) {
    if (asset.category === 'wrappers') {
        return {
            width: 260,
            height: 360
        };
    }

    if (asset.category === 'fillers' || asset.category === 'seasonal') {
        return { width: 110, height: 110 };
    }

    if (asset.category === 'accessories') {
        return { width: 90, height: 90 };
    }

    if (asset.category === 'images') {
        return { width: 180, height: 180 };
    }

    return { width: 100, height: 100 };
} 

function getSelectedItem() {
  return state.canvasItems.find((item) => item.id === state.selectedItemId) || null;
}

function selectItem(itemId) {
  state.selectedItemId = itemId;
  renderCanvas();
  renderEditPanel();
}

function duplicateSelected() {
  const selected = getSelectedItem();
  if (!selected) return;

  const duplicate = {
    ...selected,
    id: `item-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    x: selected.x + 20,
    y: selected.y + 20,
    zIndex: selected.zIndex + 1
  };

  state.canvasItems.push(duplicate);
  state.selectedItemId = duplicate.id;
  renderCanvas();
  renderEditPanel();
  pushHistory();
}

function deleteSelected() {
  const selected = getSelectedItem();
  if (!selected) return;
  state.canvasItems = state.canvasItems.filter((item) => item.id !== selected.id);
  state.selectedItemId = null;
  renderCanvas();
  renderEditPanel();
  pushHistory();
}

function rotateSelected(angle) {
  const selected = getSelectedItem();
  if (!selected) return;
  selected.rotation = normalizeRotation(selected.rotation + angle);
  renderCanvas();
  renderEditPanel();
  pushHistory();
}

function flipSelected(axis) {
  const selected = getSelectedItem();
  if (!selected) return;
  if (axis === 'horizontal') selected.flipX = !selected.flipX;
  if (axis === 'vertical') selected.flipY = !selected.flipY;
  renderCanvas();
  renderEditPanel();
  pushHistory();
}

function bringForward() {
  const selected = getSelectedItem();
  if (!selected) return;
  const items = [...state.canvasItems].sort((a, b) => a.zIndex - b.zIndex);
  const index = items.findIndex((item) => item.id === selected.id);
  if (index < items.length - 1) {
    [items[index], items[index + 1]] = [items[index + 1], items[index]];
  }

  items.forEach((item, index) => {
    item.zIndex = index + 1;
  });
  state.canvasItems = items;
  renderCanvas();
  pushHistory();
}

function sendBackward() {
  const selected = getSelectedItem();
  if (!selected) return;
  const items = [...state.canvasItems].sort((a, b) => a.zIndex - b.zIndex);
  const index = items.findIndex((item) => item.id === selected.id);
  if (index > 0) {
    [items[index], items[index - 1]] = [items[index - 1], items[index]];
  }

  items.forEach((item, index) => {
    item.zIndex = index + 1;
  });
  state.canvasItems = items;
  renderCanvas();
  pushHistory();
}

function handleCanvasPointerDown(event) {
  const itemElement = event.target.closest('.bouquet-item');
  if (!itemElement) {
    state.selectedItemId = null;
    renderCanvas();
    renderEditPanel();
    return;
  }

  const itemId = itemElement.dataset.id;
  const item = state.canvasItems.find((entry) => entry.id === itemId);
  if (!item) return;

  selectItem(itemId);

  const target = event.target;
  if (target.closest('.resize-handle')) {
    state.activeDrag = { type: 'resize', id: itemId, startX: event.clientX, startY: event.clientY, startWidth: item.width, startHeight: item.height, changed: false };
    return;
  }

  if (target.closest('.rotate-handle')) {
    const centerX = item.x;
    const centerY = item.y;
    state.activeDrag = { type: 'rotate', id: itemId, startX: event.clientX, startY: event.clientY, startRotation: item.rotation, centerX, centerY, changed: false };
    return;
  }

  state.activeDrag = {
    type: 'drag',
    id: itemId,
    startX: event.clientX,
    startY: event.clientY,
    originX: item.x,
    originY: item.y,
    changed: false
  };
}

function handlePointerMove(event) {
  if (!state.activeDrag) return;

  const item = state.canvasItems.find((entry) => entry.id === state.activeDrag.id);
  if (!item) return;

  if (state.activeDrag.type === 'drag') {
    const dx = event.clientX - state.activeDrag.startX;
    const dy = event.clientY - state.activeDrag.startY;
    item.x = state.activeDrag.originX + dx / 1;
    item.y = state.activeDrag.originY + dy / 1;
    state.activeDrag.changed = true;
  }

  if (state.activeDrag.type === 'resize') {
    const deltaX = event.clientX - state.activeDrag.startX;
    const deltaY = event.clientY - state.activeDrag.startY;

    if (item.category === 'wrappers') {
      const scale = Math.max(Math.abs(deltaY), Math.abs(deltaX) * 0.85);
      const nextWidth = Math.max(90, state.activeDrag.startWidth + scale * 0.9);
      const nextHeight = Math.max(130, state.activeDrag.startHeight + scale * 1.2);
      item.width = nextWidth;
      item.height = nextHeight;
    } else {
      const delta = Math.max(event.clientX - state.activeDrag.startX, event.clientY - state.activeDrag.startY);
      item.width = Math.max(40, state.activeDrag.startWidth + delta * 0.9);
      item.height = Math.max(40, state.activeDrag.startHeight + delta * 0.9);
    }

    state.activeDrag.changed = true;
  }

  if (state.activeDrag.type === 'rotate') {
    const angle = getAngleFromCenter(event.clientX, event.clientY, item.x, item.y);
    item.rotation = normalizeRotation(angle);
    state.activeDrag.changed = true;
  }

  renderCanvas();
  renderEditPanel();
}

function handlePointerUp() {
  if (!state.activeDrag) return;

  if (state.activeDrag.changed) {
    pushHistory();
  }

  state.activeDrag = null;
}

function getAngleFromCenter(clientX, clientY, centerX, centerY) {
  const canvasRect = refs.bouquetCanvas.getBoundingClientRect();
  const relativeX = clientX - canvasRect.left - centerX;
  const relativeY = clientY - canvasRect.top - centerY;
  const angle = Math.atan2(relativeY, relativeX) * (180 / Math.PI) + 90;
  return angle < 0 ? angle + 360 : angle;
}

function handleKeydown(event) {
  const selected = getSelectedItem();

  if (event.ctrlKey && event.key.toLowerCase() === 'z') {
    event.preventDefault();
    undo();
    return;
  }

  if (event.ctrlKey && event.key.toLowerCase() === 'y') {
    event.preventDefault();
    redo();
    return;
  }

  if (!selected) return;

  if (event.key === 'Delete' || event.key === 'Backspace') {
    event.preventDefault();
    deleteSelected();
    return;
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    state.selectedItemId = null;
    renderCanvas();
    renderEditPanel();
    return;
  }

  if (event.ctrlKey && event.key.toLowerCase() === 'd') {
    event.preventDefault();
    duplicateSelected();
    return;
  }

  const moveAmount = event.shiftKey ? 18 : 10;
  const arrowMap = {
    ArrowLeft: { x: -moveAmount, y: 0 },
    ArrowRight: { x: moveAmount, y: 0 },
    ArrowUp: { x: 0, y: -moveAmount },
    ArrowDown: { x: 0, y: moveAmount }
  };

  if (arrowMap[event.key]) {
    event.preventDefault();
    const change = arrowMap[event.key];
    selected.x += change.x;
    selected.y += change.y;
    renderCanvas();
    renderEditPanel();
    pushHistory();
  }
}

function normalizeRotation(rotation) {
  let value = rotation % 360;
  if (value < 0) value += 360;
  return value;
}

function updateMessagePreview() {
  refs.previewTitle.textContent = state.message.title || 'For Someone Special';
  refs.previewRecipient.textContent = state.message.recipient || 'My Love';
  refs.previewSender.textContent = state.message.sender || 'From Me';
  refs.previewMessageText.textContent = state.message.text || 'Just a little bouquet to remind you how special you are. 🌷';
  refs.messageCounter.textContent = `${refs.bouquetMessage.value.length}/260`;

  const previewCard = document.getElementById('previewMessageCard');
  previewCard.className = 'preview-message-card';
  previewCard.classList.add(`style-${state.messageCardStyle.toLowerCase()}`);

  if (state.messageCardStyle === 'Rose') {
    previewCard.style.background = 'linear-gradient(135deg, #fff2f6, #ffe7ef)';
    previewCard.style.borderColor = 'rgba(232,143,162,0.35)';
  } else if (state.messageCardStyle === 'Pastel') {
    previewCard.style.background = 'linear-gradient(135deg, #f8f1ff, #fff3eb)';
  } else if (state.messageCardStyle === 'Vintage') {
    previewCard.style.background = 'linear-gradient(135deg, #f7f2e8, #f9efe5)';
  } else if (state.messageCardStyle === 'Midnight') {
    previewCard.style.background = 'linear-gradient(135deg, #26263d, #3d2c48)';
    previewCard.style.color = '#fff';
  } else if (state.messageCardStyle === 'Minimal') {
    previewCard.style.background = '#fff';
  } else {
    previewCard.style.background = 'linear-gradient(135deg, #fff2f6, #fff5ef)';
    previewCard.style.borderColor = 'rgba(232,143,162,0.2)';
    previewCard.style.color = '#3f3538';
  }
}

function showPreview() {
  const previewArea = refs.previewCanvas;
  previewArea.innerHTML = '';

  if (state.canvasItems.length === 0) {
    previewArea.innerHTML = '<div class="canvas-empty"><div class="empty-icon">🌸</div><h3>Your bouquet is empty.</h3><p>Add flowers and decorations to preview it.</p></div>';
  } else {
    const clone = [...state.canvasItems].sort((a, b) => a.zIndex - b.zIndex);
    clone.forEach((item) => {
      const element = document.createElement('div');
      const itemStyle = getPreviewStyle(item);
      element.className = 'bouquet-item';
      element.style.left = `${item.x / 1.2}px`;
      element.style.top = `${item.y / 1.2}px`;
      element.style.width = `${item.width / 1.2}px`;
      element.style.height = `${item.height / 1.2}px`;
      element.style.opacity = item.opacity;
      element.style.transform = `rotate(${item.rotation}deg) scaleX(${item.flipX ? -1 : 1}) scaleY(${item.flipY ? -1 : 1})`;
      element.style.zIndex = item.zIndex;
      element.innerHTML = itemStyle;
      previewArea.appendChild(element);
    });
  }

  refs.previewModal.classList.remove('hidden');
  refs.previewModal.setAttribute('aria-hidden', 'false');
  updateMessagePreview();
}

function getPreviewStyle(item) {
  if (item.kind === 'image') {
    return `<div class="item-visual"><img src="${item.src}" alt="${escapeHtml(item.name)}" /></div>`;
  }

  const asset = getAssetById(item.assetId) || { emoji: '🌸', name: item.name };
  return `<div class="item-visual"><div class="item-emoji">${asset.emoji}</div></div>`;
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function saveBouquet() {
  const data = {
    canvasItems: state.canvasItems,
    selectedItemId: state.selectedItemId,
    background: state.background,
    message: state.message,
    messageCardStyle: state.messageCardStyle,
    stateCategory: state.category,
    timestamp: Date.now()
  };

  localStorage.setItem('virtualBouquetSave', JSON.stringify(data));
  showToast('Bouquet saved locally');
}

function loadBouquet() {
  const raw = localStorage.getItem('virtualBouquetSave');
  if (!raw) return;

  try {
    const saved = JSON.parse(raw);
    state.canvasItems = saved.canvasItems || [];
    state.selectedItemId = saved.selectedItemId || null;
    state.background = saved.background || '#fffaf7';
    state.message = { ...state.message, ...(saved.message || {}) };
    state.messageCardStyle = saved.messageCardStyle || 'Classic';
    state.category = saved.stateCategory || 'flowers';
    refs.bouquetTitle.value = state.message.title || '';
    refs.bouquetRecipient.value = state.message.recipient || '';
    refs.bouquetSender.value = state.message.sender || '';
    refs.bouquetMessage.value = state.message.text || '';
    refs.messageCounter.textContent = `${refs.bouquetMessage.value.length}/260`;
    applyBackground();
    renderCategoryTabs();
    renderAssets();
    renderCanvas();
    renderEditPanel();
    renderMessageCardStyles();
    updateMessagePreview();
    showToast('Previous bouquet restored');
  } catch (error) {
    console.error('Failed to load saved bouquet', error);
  }
}

function checkSavedBouquet() {
  const hasSave = localStorage.getItem('virtualBouquetSave');
  if (hasSave) {
    refs.restoreModal.classList.remove('hidden');
    refs.restoreModal.setAttribute('aria-hidden', 'false');
  }
}

function newBouquet() {
  state.canvasItems = [];
  state.selectedItemId = null;
  state.message = {
    title: 'For Someone Special',
    recipient: 'My Love',
    sender: 'From Me',
    text: 'Just a little bouquet to remind you how special you are. 🌷'
  };
  state.background = '#fffaf7';
  state.messageCardStyle = 'Classic';
  refs.bouquetTitle.value = state.message.title;
  refs.bouquetRecipient.value = state.message.recipient;
  refs.bouquetSender.value = state.message.sender;
  refs.bouquetMessage.value = state.message.text;
  refs.messageCounter.textContent = `${state.message.text.length}/260`;
  renderBackgroundOptions();
  renderCanvas();
  renderEditPanel();
  updateMessagePreview();
  applyBackground();
  showToast('Fresh bouquet started');
}

function showToast(message) {
  refs.toast.textContent = message;
  refs.toast.classList.remove('hidden');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => refs.toast.classList.add('hidden'), 1800);
}

function applyBackground() {
  refs.bouquetCanvas.style.background = state.background === 'transparent' ? '' : state.background;
  refs.bouquetCanvas.classList.toggle('transparent', state.background === 'transparent');
  refs.customBackgroundColor.value = isHexColor(state.background) ? state.background : '#fffaf7';
}

function undo() {
  if (!state.history.length || state.historyIndex <= 0) return;
  state.historyIndex -= 1;
  restoreSnapshot(state.history[state.historyIndex]);
}

function redo() {
  if (!state.history.length || state.historyIndex >= state.history.length - 1) return;
  state.historyIndex += 1;
  restoreSnapshot(state.history[state.historyIndex]);
}

function pushHistory() {
  const snapshot = JSON.stringify({
    canvasItems: state.canvasItems,
    selectedItemId: state.selectedItemId,
    background: state.background,
    message: state.message,
    messageCardStyle: state.messageCardStyle,
    category: state.category
  });

  const previous = state.history[state.historyIndex];
  if (previous === snapshot) return;

  state.history = state.history.slice(0, state.historyIndex + 1);
  state.history.push(snapshot);
  state.historyIndex = state.history.length - 1;
  if (state.history.length > 60) {
    state.history.shift();
    state.historyIndex = state.history.length - 1;
  }
}

function restoreSnapshot(snapshot) {
  if (!snapshot) return;
  try {
    const parsed = JSON.parse(snapshot);
    state.canvasItems = parsed.canvasItems || [];
    state.selectedItemId = parsed.selectedItemId || null;
    state.background = parsed.background || '#fffaf7';
    state.message = parsed.message || state.message;
    state.messageCardStyle = parsed.messageCardStyle || 'Classic';
    state.category = parsed.category || 'flowers';
    refs.bouquetTitle.value = state.message.title || '';
    refs.bouquetRecipient.value = state.message.recipient || '';
    refs.bouquetSender.value = state.message.sender || '';
    refs.bouquetMessage.value = state.message.text || '';
    refs.messageCounter.textContent = `${refs.bouquetMessage.value.length}/260`;
    applyBackground();
    renderBackgroundOptions();
    renderCategoryTabs();
    renderColorFilters();
    renderAssets();
    renderCanvas();
    renderEditPanel();
    renderMessageCardStyles();
    updateMessagePreview();
  } catch (error) {
    console.error('Unable to restore snapshot', error);
  }
}

function downloadBouquet() {
  if (!window.html2canvas) {
    showToast('Image export is unavailable right now.');
    return;
  }

  const source = refs.bouquetCanvas;
  html2canvas(source, {
    backgroundColor: state.background === 'transparent' ? '#fffaf7' : state.background,
    scale: 2,
    useCORS: true
  }).then((canvas) => {
    const link = document.createElement('a');
    link.download = 'my-virtual-bouquet.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('Bouquet downloaded');
  }).catch(() => {
    showToast('Download failed. Please try again.');
  });
}

function getAssetById(assetId) {
  return assets.find((asset) => asset.id === assetId) || null;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function isHexColor(value) {
  return /^#[0-9a-fA-F]{6}$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

window.addEventListener('DOMContentLoaded', init);
