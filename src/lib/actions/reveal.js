const OFFSETS = {
	bottom: 'translateY(2rem)',
	left: 'translateX(-2rem)',
	right: 'translateX(2rem)'
};

const DURATION = 500;

/**
 * Fades an element in the first time it scrolls into view.
 *
 * Every section used to run its own `IntersectionObserver` over a global
 * `document.querySelectorAll('.animate')`, so each component observed every
 * other component's elements and nothing was ever disconnected. This does the
 * same job once, per element, and cleans up when the element goes away.
 *
 * Two deliberate choices:
 *  - the hidden state is applied here, not in markup, so the prerendered HTML
 *    stays readable with JavaScript off or still loading;
 *  - it animates through inline styles, so a component's own scoped rules
 *    (which outrank any global class Svelte can't scope) can't cancel it.
 *    Once the reveal is done every trace of it is removed from the element.
 *
 * @param {HTMLElement} node
 * @param {{ delay?: number, from?: keyof typeof OFFSETS }} [options]
 */
export function reveal(node, options = {}) {
	const { delay = 0, from = 'bottom' } = options;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return {};
	}

	node.style.opacity = '0';
	node.style.filter = 'blur(5px)';
	node.style.transform = OFFSETS[from] ?? OFFSETS.bottom;
	node.style.transition =
		`opacity ${DURATION}ms ease ${delay}ms,` +
		`filter ${DURATION}ms ease ${delay}ms,` +
		`transform ${DURATION}ms ease ${delay}ms`;

	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let cleanupTimer;
	let done = false;

	function show() {
		if (done) return;
		done = true;

		observer.disconnect();

		node.style.opacity = '';
		node.style.filter = '';
		node.style.transform = '';

		// Hand the element back to its own stylesheet once it has settled,
		// so hover transitions and the like behave normally afterwards.
		cleanupTimer = setTimeout(() => {
			node.style.transition = '';
		}, delay + DURATION + 50);
	}

	const observer = new IntersectionObserver(
		(entries) => {
			if (entries.some((entry) => entry.isIntersecting)) show();
		},
		{ rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	// Failsafe: browsers throttle IntersectionObserver in backgrounded or
	// non-rendering tabs, and an element that stays at opacity 0 is content the
	// visitor simply never sees. If the observer hasn't reported back shortly
	// after mount, show anything that is on screen by measurement instead.
	const failsafe = setTimeout(() => {
		const { top, bottom } = node.getBoundingClientRect();
		if (top < window.innerHeight && bottom > 0) show();
	}, 2000);

	return {
		destroy() {
			observer.disconnect();
			clearTimeout(failsafe);
			clearTimeout(cleanupTimer);
		}
	};
}
