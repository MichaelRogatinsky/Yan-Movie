export function parallax(node: HTMLElement, speed = 0.15) {
	// Count how many background layers exist so we can set position for each
	const style = getComputedStyle(node);
	const layerCount = (style.backgroundImage.match(/,/g) || []).length + 1;

	const update = () => {
		const rect = node.getBoundingClientRect();
		const offset = rect.top * speed;
		const pos = `center calc(50% + ${offset}px)`;
		// Apply same position to all background layers
		node.style.backgroundPosition = Array(layerCount).fill(pos).join(', ');
	};

	window.addEventListener('scroll', update, { passive: true });
	window.addEventListener('resize', update, { passive: true });
	update();

	return {
		destroy() {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		}
	};
}
