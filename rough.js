// Nested Routing
// How It Works?
// ✅ When the user visits /movie, CommonPage is shown.
// ✅ Inside CommonPage, there is a sidebar that stays fixed (30% width).
// ✅ Depending on the child route (/booking, /selection/:id, or /activity), the right section (70%) updates dynamically.
// ✅ The <Outlet /> in CommonPage ensures that child components get injected properly.