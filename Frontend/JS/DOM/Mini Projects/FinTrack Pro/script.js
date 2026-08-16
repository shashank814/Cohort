/*  ELEMENT REFERENCES  */

const authScreen = document.querySelector("#authScreen");
const appShell = document.querySelector("#appShell");

const tabLogin = document.querySelector("#tabLogin");
const tabSignup = document.querySelector("#tabSignup");
const loginForm = document.querySelector("#loginForm");
const signupForm = document.querySelector("#signupForm");
const loginError = document.querySelector("#loginError");
const signupError = document.querySelector("#signupError");

const navUsername = document.querySelector("#navUsername");
const logoutBtn = document.querySelector("#logoutBtn");

const dark = document.querySelector("#dark");
const darkToggle = document.querySelector("#darkToggle");
const body = document.querySelector("body");

const navDashboard = document.querySelector("#nav-dashboard");
const navSettings = document.querySelector("#nav-settings");
const pageDashboard = document.querySelector("#page-dashboard");
const pageSettings = document.querySelector("#page-settings");

const txModal = document.querySelector("#txModal");
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");
const txForm = document.querySelector("#txForm");
const modalTitle = document.querySelector("#modalTitle");

const txBody = document.querySelector("#txBody");
const emptyState = document.querySelector("#emptyState");
const filterType = document.querySelector("#filterType");

const profileForm = document.querySelector("#profileForm");
const resetData = document.querySelector("#resetData");

let txArr = [];
let updateIndex = null;
let currentUser = null;

let profile = {
    fullName: "",
    currency: "USD"
};

const currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    INR: "₹",
    JPY: "¥"
};

/*  AUTH: TAB SWITCH  */

tabLogin.addEventListener("click", () => {
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
});

tabSignup.addEventListener("click", () => {
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
});

/*  AUTH: USER STORE  */

const getUsers = () => {
    const data = localStorage.getItem("ftUsers");
    return data ? JSON.parse(data) : {};
};

const saveUsers = (users) => {
    localStorage.setItem("ftUsers", JSON.stringify(users));
};

/*  AUTH: SIGNUP  */

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#signupUsername").value.trim();
    const password = document.querySelector("#signupPassword").value;

    signupError.classList.add("hidden");

    if (username === "" || password === "") {
        signupError.textContent = "Please fill in both fields.";
        signupError.classList.remove("hidden");
        return;
    }

    const users = getUsers();

    if (users[username]) {
        signupError.textContent = "That username is already taken.";
        signupError.classList.remove("hidden");
        return;
    }

    users[username] = password;
    saveUsers(users);

    signupForm.reset();
    logIn(username);
});

/*  AUTH: LOGIN  */

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#loginUsername").value.trim();
    const password = document.querySelector("#loginPassword").value;

    loginError.classList.add("hidden");

    const users = getUsers();

    if (!users[username] || users[username] !== password) {
        loginError.textContent = "Invalid username or password.";
        loginError.classList.remove("hidden");
        return;
    }

    loginForm.reset();
    logIn(username);
});

/*  AUTH: LOGIN / LOGOUT ACTIONS  */

const logIn = (username) => {
    currentUser = username;
    localStorage.setItem("ftCurrentUser", username);

    navUsername.textContent = username;
    authScreen.classList.add("hidden");
    appShell.classList.remove("hidden");

    getData();
    getProfile();
    ui();
};

const logOut = () => {
    currentUser = null;
    localStorage.removeItem("ftCurrentUser");

    appShell.classList.add("hidden");
    authScreen.classList.remove("hidden");

    tabLogin.click();
    loginError.classList.add("hidden");
    signupError.classList.add("hidden");
};

logoutBtn.addEventListener("click", logOut);

/*  AUTH: AUTO LOGIN FROM SESSION  */

const savedUser = localStorage.getItem("ftCurrentUser");
if (savedUser) {
    logIn(savedUser);
}

/*  DARK MODE  */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    darkToggle.checked = true;
    dark.classList.replace("ri-moon-line", "ri-sun-line");
}

const toggleDarkMode = () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        dark.classList.replace("ri-moon-line", "ri-sun-line");
        darkToggle.checked = true;
    } else {
        localStorage.setItem("theme", "light");
        dark.classList.replace("ri-sun-line", "ri-moon-line");
        darkToggle.checked = false;
    }

    renderChart();
};

dark.addEventListener("click", toggleDarkMode);
darkToggle.addEventListener("change", toggleDarkMode);

/*  PAGE SWITCH  */

navDashboard.addEventListener("click", (e) => {
    e.preventDefault();
    navDashboard.classList.add("active");
    navSettings.classList.remove("active");
    pageDashboard.classList.remove("hidden");
    pageSettings.classList.add("hidden");
    renderChart();
});

navSettings.addEventListener("click", (e) => {
    e.preventDefault();
    navSettings.classList.add("active");
    navDashboard.classList.remove("active");
    pageSettings.classList.remove("hidden");
    pageDashboard.classList.add("hidden");
});

/*  MODAL OPEN/CLOSE  */

openModal.addEventListener("click", () => {
    updateIndex = null;
    modalTitle.textContent = "Add Transaction";
    txForm.reset();
    txModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    txModal.style.display = "none";
});

txModal.addEventListener("click", (e) => {
    if (e.target === txModal) {
        txModal.style.display = "none";
    }
});

/*  CURRENCY FORMAT  */

const formatAmount = (value) => {
    const symbol = currencySymbols[profile.currency] || "$";
    return `${symbol}${Number(value).toFixed(2)}`;
};

/*  UI RENDER  */

const renderStats = () => {
    const income = txArr
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const expense = txArr
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    document.querySelector("#statBalance").textContent = formatAmount(income - expense);
    document.querySelector("#statIncome").textContent = formatAmount(income);
    document.querySelector("#statExpense").textContent = formatAmount(expense);
    document.querySelector("#statCount").textContent = txArr.length;
};

const renderTable = () => {
    const filter = filterType.value;

    const filtered = txArr
        .map((t, index) => ({ ...t, index }))
        .filter((t) => filter === "all" || t.type === filter)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    txBody.innerHTML = "";

    filtered.forEach((t) => {
        txBody.innerHTML += `
        <tr>
            <td>${t.date || "-"}</td>
            <td>${t.description}</td>
            <td><span class="cat-badge">${t.category}</span></td>
            <td class="amount ${t.type}">${t.type === "income" ? "+" : "-"}${formatAmount(t.amount)}</td>
            <td class="row-actions">
                <i class="ri-pencil-line update" data-index="${t.index}"></i>
                <i class="ri-delete-bin-line del" data-index="${t.index}"></i>
            </td>
        </tr>
        `;
    });

    emptyState.classList.toggle("hidden", txArr.length !== 0);
};

const renderChart = () => {
    const canvas = document.querySelector("#cashFlowChart");
    if (!canvas || pageDashboard.classList.contains("hidden")) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.parentElement.clientWidth - 4;

    if (width <= 0) return;

    const dpr = window.devicePixelRatio || 1;

    canvas.style.width = width + "px";
    canvas.style.height = "220px";
    canvas.width = width * dpr;
    canvas.height = 220 * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, 220);

    const months = [];
    const today = new Date();

    for (let i = 5; i >= 0; i--) {
        const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
        months.push({ key: `${d.getFullYear()}-${d.getMonth()}`, label: d.toLocaleString("default", { month: "short" }), income: 0, expense: 0 });
    }

    txArr.forEach((t) => {
        if (!t.date) return;
        const d = new Date(t.date);
        const key = `${d.getFullYear()}-${d.getMonth()}`;
        const bucket = months.find((m) => m.key === key);
        if (!bucket) return;
        if (t.type === "income") bucket.income += Number(t.amount);
        else bucket.expense += Number(t.amount);
    });

    const max = Math.max(1, ...months.map((m) => Math.max(m.income, m.expense)));
    const groupWidth = width / months.length;
    const barWidth = groupWidth / 4;
    const chartTop = 12;
    const chartHeight = 220 - 30 - chartTop;
    const baseline = chartTop + chartHeight;

    const isDark = body.classList.contains("dark");
    const gridColor = isDark ? "#263250" : "#e3e7ee";
    const labelColor = isDark ? "#8893ab" : "#6b7587";

    /* gridlines so the chart area is always visible, even with no data */
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    for (let g = 0; g <= 4; g++) {
        const y = chartTop + (chartHeight / 4) * g;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }

    ctx.font = "12px Inter";
    ctx.fillStyle = labelColor;
    ctx.textAlign = "center";

    months.forEach((m, i) => {
        const groupX = i * groupWidth;

        const incomeHeight = (m.income / max) * chartHeight;
        const expenseHeight = (m.expense / max) * chartHeight;

        ctx.fillStyle = "#1aa163";
        ctx.fillRect(groupX + barWidth, baseline - incomeHeight, barWidth - 6, incomeHeight);

        ctx.fillStyle = "#e34646";
        ctx.fillRect(groupX + barWidth * 2, baseline - expenseHeight, barWidth - 6, expenseHeight);

        ctx.fillStyle = labelColor;
        ctx.fillText(m.label, groupX + groupWidth / 2, baseline + 18);
    });

    /* legend */
    ctx.textAlign = "left";
    ctx.fillStyle = "#1aa163";
    ctx.fillRect(width - 150, 0, 10, 10);
    ctx.fillStyle = labelColor;
    ctx.fillText("Income", width - 134, 9);

    ctx.fillStyle = "#e34646";
    ctx.fillRect(width - 70, 0, 10, 10);
    ctx.fillStyle = labelColor;
    ctx.fillText("Expense", width - 54, 9);
};

const ui = () => {
    renderStats();
    renderTable();
    renderChart();
};

/*  ADD / UPDATE TRANSACTION  */

txForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const type = document.querySelector("#txType").value;
    const description = document.querySelector("#txDesc").value;
    const amount = document.querySelector("#txAmount").value;
    const date = document.querySelector("#txDate").value;
    const category = document.querySelector("#txCategory").value;

    if (description.trim() === "" || amount === "" || category.trim() === "") {
        alert("Please fill all fields!");
        return;
    }

    let obj = { type, description, amount, date, category };

    if (updateIndex !== null) {
        txArr[updateIndex] = obj;
        updateIndex = null;
    } else {
        txArr.push(obj);
    }

    saveData();
    ui();

    txForm.reset();
    txModal.style.display = "none";
});

/*  ROW ACTIONS  */

txBody.addEventListener("click", (e) => {
    const updateBtn = e.target.closest(".update");
    const delBtn = e.target.closest(".del");

    if (updateBtn) {
        const index = updateBtn.dataset.index;
        const t = txArr[index];

        document.querySelector("#txType").value = t.type;
        document.querySelector("#txDesc").value = t.description;
        document.querySelector("#txAmount").value = t.amount;
        document.querySelector("#txDate").value = t.date;
        document.querySelector("#txCategory").value = t.category;

        updateIndex = index;
        modalTitle.textContent = "Update Transaction";
        txModal.style.display = "flex";
    }

    if (delBtn) {
        const index = delBtn.dataset.index;
        txArr.splice(index, 1);
        saveData();
        ui();
    }
});

filterType.addEventListener("change", renderTable);

/*  SETTINGS / PROFILE  */

profileForm.addEventListener("submit", (event) => {
    event.preventDefault();

    profile.fullName = document.querySelector("#fullName").value;
    profile.currency = document.querySelector("#currency").value;

    saveProfile();
    ui();

    alert("Profile saved!");
});

resetData.addEventListener("click", () => {
    const confirmed = confirm("This will permanently delete all transactions. Continue?");
    if (!confirmed) return;

    txArr = [];
    saveData();
    ui();
});

/*  LOCAL STORAGE (SCOPED PER LOGGED-IN USER)  */

const saveData = () => {
    if (!currentUser) return;
    localStorage.setItem(`financeData_${currentUser}`, JSON.stringify(txArr));
};

const getData = () => {
    txArr = [];
    if (!currentUser) return;

    const data = localStorage.getItem(`financeData_${currentUser}`);
    if (data) {
        txArr = JSON.parse(data);
    }
};

const saveProfile = () => {
    if (!currentUser) return;
    localStorage.setItem(`profileData_${currentUser}`, JSON.stringify(profile));
};

const getProfile = () => {
    profile = { fullName: "", currency: "USD" };
    if (!currentUser) return;

    const data = localStorage.getItem(`profileData_${currentUser}`);
    if (data) {
        profile = JSON.parse(data);
    }

    document.querySelector("#fullName").value = profile.fullName || "";
    document.querySelector("#currency").value = profile.currency || "USD";
};

window.addEventListener("resize", renderChart);
