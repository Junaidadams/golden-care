const ENDPOINT = "https://mail-server-6sjb.onrender.com/api/mail/portfolio-contact";

export function initContactForm() {
	const form = document.getElementById("contact-form") as HTMLFormElement | null;
	const status = document.getElementById("contact-status");
	const button = form?.querySelector<HTMLButtonElement>("button[type='submit']");
	const originalLabel = button?.textContent ?? "Send message";

	if (!form || !status || !button) return;

	const setStatus = (message: string, isError = false) => {
		status.textContent = message;
		status.className = `text-sm font-medium ${isError ? "text-red-600" : "text-green-600"}`;
		status.hidden = false;
	};

	const setLoading = (loading: boolean) => {
		button.disabled = loading;
		button.textContent = loading ? "Sending…" : originalLabel;
	};

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		const data = new FormData(form);
		if (data.get("company")) return;

		const payload = {
			name: String(data.get("name") ?? "").trim(),
			email: String(data.get("email") ?? "").trim(),
			phone: String(data.get("phone") ?? "").trim(),
			message: String(data.get("message") ?? "").trim(),
		};

		setLoading(true);
		setStatus("");

		try {
			const response = await fetch(ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			if (!response.ok) throw new Error(`Request failed: ${response.status}`);

			form.reset();
			setStatus("Thanks, your message has been sent.");
		} catch {
			setStatus("Sorry, something went wrong. Please try again.", true);
		} finally {
			setLoading(false);
		}
	});
}
