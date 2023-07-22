import { LitElement, css, html } from "lit";
import { getTimeDiffeence } from "../modules/timeDifference";

export class TaskCard extends LitElement {
  static properties = {
    data: { type: Object },
    initial: { type: String },
    description: { type: String }
  };

  static styles = css`
    :host {
      color: #000;
      user-select: none;
    }

    :host(.hidden) {
      display: none;
    }

    .card {
      background: var(--bg-color, #fff);
      border-radius: 22px;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    p, h1 {
      margin: 0;
    }

    .time {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-weight: 400;
      font-size: 1.2rem;
    }

    .hour {
      line-height: 1rem;
    }

    .time span {
      font-size: 0.8rem;
      display: block;
      text-align: center;
    }

    main {
      width: 100%;
    }

    .difference-time {
      text-align: center;
      padding: 0.4rem 0.6rem;
      background: rgba(255, 255, 255, 0.5);
      border: 1.2px solid #000;
      border-radius: 10px;
      width: fit-content;
      margin: 0 auto;
      margin-bottom: 0.3rem;
    }

    .title {
      font-size: 38px;
      word-break: break-word;
      hyphens: auto;
    }

    .managers {
      display: flex;
      justify-content: space-evenly;
    }

    .manager, .description {
      text-align: center;
      font-size: 0.9rem;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 1rem;
    }
  `;

  constructor() {
    super();
    this.description = "";
    this.timeDiff = "";

    this.addEventListener("click", () => {
      if (this.description === "") {
        this.description = this.data.description;
      } else {
        this.description = "";
      }
    });
    this.addEventListener("task-end", () => {
      this.classList.add("hidden");
      localStorage.setItem(this.data.title, "true");
    });
  }

  init() {
    const initTime = this.initial;
    const { endTime } = this.data;

    this.hourInit = initTime.split(":")[0];
    this.minInit = initTime.split(":")[1];
    this.hourEnd = endTime.split(":")[0];
    this.minEnd = endTime.split(":")[1];

    const shouldBeHidden = localStorage.getItem(this.data.title);
    if (shouldBeHidden === "true") {
      this.classList.add("hidden");
    }
  }

  getTimeDiff() {
    return getTimeDiffeence(this.hourInit, this.minInit, this.hourEnd, this.minEnd);
  }

  managers() {
    const { managers } = this.data;

    return managers.map(manager =>
      html`<p class="manager">${manager.toUpperCase()}</p>`
    );
  }

  render() {
    this.init();

    return html`
    <div class="card">
      <div class="time">
        <p class="hour time-init">${this.hourInit}<span>${this.minInit}</span></p>
        <p class="time-separator">|</p>
        <p class="hour time-end">${this.hourEnd}<span>${this.minEnd}</span></p>
      </div>
      <main>
        <p class="difference-time">${this.getTimeDiff()}</p>
        <h1 class="title">${this.data.title.toUpperCase()}</h1>
        <div class="managers">
          ${this.managers()}
        </div>
        <div class="content">
          <p class="description">${this.description}</p>
        </div>
      </main>
      <div class="progress"></div>
    </div>`;
  }
}

customElements.define("task-card", TaskCard);
