* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    font-family: Georgia, 'Times New Roman', serif;
    background: #f9f5f0;
    color: #2e1f0e;
    font-size: 15px;
    line-height: 1.6;
}

.page { display: none; }
.page.active { display: block; }

.center-wrap {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f5f0;
}

.card {
    background: #fff;
    border: 2px solid #c9a97a;
    padding: 40px 36px;
    width: 400px;
    max-width: 95vw;
}

.card h1 {
    font-size: 1.9rem;
    text-align: center;
    color: #5c3317;
    margin-bottom: 4px;
    letter-spacing: 1px;
}

.card .tagline {
    text-align: center;
    font-size: 0.85rem;
    color: #8b6340;
    margin-bottom: 28px;
    font-style: italic;
}

label {
    display: block;
    font-size: 0.82rem;
    color: #5c3317;
    margin-bottom: 5px;
    font-family: Arial, sans-serif;
    letter-spacing: 0.04em;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="file"] {
    width: 100%;
    padding: 9px 10px;
    border: 1px solid #c9a97a;
    font-family: Arial, sans-serif;
    font-size: 0.93rem;
    color: #2e1f0e;
    background: #fffdf9;
    margin-bottom: 16px;
    outline: none;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
    border-color: #5c3317;
}

/* BOTONES */
.btn {
    padding: 10px 22px;
    border: none;
    font-family: Arial, sans-serif;
    font-size: 0.92rem;
    cursor: pointer;
    letter-spacing: 0.04em;
}

.btn-full { width: 100%; }

.btn-primary { background: #5c3317; color: #fff; }

.btn-outline {
    background: #fff;
    color: #5c3317;
    border: 2px solid #5c3317;
}

.btn-secondary { background: #e8d8c4; color: #5c3317; }

.btn-green { background: #2e7d32; color: #fff; }

.btn-back {
    background: none;
    border: none;
    color: #5c3317;
    font-family: Arial, sans-serif;
    font-size: 0.88rem;
    cursor: pointer;
    text-decoration: underline;
}

.link-btn {
    background: none;
    border: none;
    color: #5c3317;
    font-family: Arial, sans-serif;
    font-size: 0.85rem;
    cursor: pointer;
    text-decoration: underline;
}

.small-footer {
    text-align: center;
    margin-top: 18px;
    font-size: 0.78rem;
    color: #b09070;
    font-family: Arial, sans-serif;
}

hr {
    border: none;
    border-top: 1px solid #e0d0be;
    margin: 18px 0;
}

/* ════════════════════════════════
HEADER
════════════════════════════════ */
header {
    background: #5c3317;
    padding: 0 28px;
    display: flex;
    align-items: center;
}

.brand {
    color: #f9f5f0;
    font-size: 1.3rem;
    letter-spacing: 1px;
    padding: 16px 0;
    margin-right: 32px;
    white-space: nowrap;
}

nav {
    display: flex;
    flex: 1;
}

nav a {
    color: #d4b896;
    text-decoration: none;
    padding: 17px 20px;
    font-family: Arial, sans-serif;
    font-size: 0.88rem;
    letter-spacing: 0.04em;
    border-bottom: 3px solid transparent;
    cursor: pointer;
}

nav a.active {
    color: #fff;
    border-bottom-color: #c9a97a;
}

.header-user {
    margin-left: auto;
    color: #d4b896;
    font-family: Arial, sans-serif;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 14px;
}

.btn-logout {
    background: none;
    border: 1px solid #8b6340;
    color: #d4b896;
    padding: 5px 12px;
    font-size: 0.8rem;
    cursor: pointer;
}

/* ════════════════════════════════
TABLAS
════════════════════════════════ */
table {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    font-size: 0.88rem;
}

table th {
    background: #e8d8c4;
    color: #5c3317;
    padding: 10px;
    border: 1px solid #c9a97a;
}

table td {
    padding: 10px;
    border: 1px solid #ddd;
}

/* BADGES */
.badge {
    font-size: 0.75rem;
    padding: 2px 9px;
    border: 1px solid;
}

.badge-care {
    border-color: #5b8fc9;
    color: #1a4f82;
    background: #edf3fb;
}

.badge-adopted {
    border-color: #5aaa6e;
    color: #1e6630;
    background: #edf7f0;
}

.badge-waiting {
    border-color: #d4892a;
    color: #7a4a00;
    background: #fdf3e3;
}

/* ════════════════════════════════
GALERÍA
════════════════════════════════ */
.animals-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}

.animal-card {
    background: #fff;
    border: 2px solid #c9a97a;
    cursor: pointer;
    text-align: center;
    padding: 20px;
    transition: transform 0.3s;
}

.animal-card:hover {
    transform: scale(1.03);
}

.animal-emoji {
    font-size: 3rem;
}

.animal-name {
    font-weight: bold;
    color: #5c3317;
}