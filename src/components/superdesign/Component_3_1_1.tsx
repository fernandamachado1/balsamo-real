function Component_3_1_1() {
  return (
    <div className="space-y-8" data-component-id="Component_3_1_1">
      <div>
        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-8">Contato</h4>
        <div className="text-muted-foreground font-light italic space-y-2">
          <p>(41) 9684-9563</p>
          <p>balsamo.real@gmail.com</p>
        </div>
      </div>
      
      <div>
        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">Siga-nos</h4>
        <a
          href="https://www.instagram.com/balsamo.real/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
        >
          <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <span className="text-sm font-medium tracking-wide uppercase">Instagram</span>
        </a>
      </div>
    </div>
  );
}

export default Component_3_1_1;
