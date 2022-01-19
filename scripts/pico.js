'use strict'!
(function() {
    let e = {
        _scheme: 'auto',
        change: { light: '<i>Turn on dark mode</i>', dark: '<i>Turn off dark mode</i>' },
        buttonsTarget: '.theme-switcher',
        init: function() { this.scheme = this._scheme, this.initSwitchers() },
        get preferedColorScheme() { return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' },
        initSwitchers: function() {
            let t = this
            document.querySelectorAll(this.buttonsTarget).forEach(function(e) { e.addEventListener('click', function() { 'dark' == t.scheme ? t.scheme = 'light' : t.scheme = 'dark' }, !1) })
        },
        addButton: function(e) {
            let t = document.createElement(e.tag)
            t.className = e.class, document.querySelector(e.target).appendChild(t)
        },
        set scheme(e) { 'auto' == e ? 'dark' == this.preferedColorScheme ? this._scheme = 'dark' : this._scheme = 'light' : 'dark' != e && 'light' != e || (this._scheme = e), this.applyScheme() },
        get scheme() { return this._scheme },
        applyScheme: function() {
            let i = this
            document.querySelector('html').setAttribute('data-theme', this.scheme), document.querySelectorAll(this.buttonsTarget).forEach(function(e) {
                let t = 'dark' == i.scheme ? i.change.dark : i.change.light
                e.innerHTML = t, e.setAttribute('aria-label', t.replace(/<[^>]*>?/gm, ''))
            })
        }
    };
    var t = {
        _state: 'closed-on-mobile',
        toggleLink: document.getElementById('toggle-docs-navigation'),
        nav: document.querySelector('main > aside > nav'),
        init: function() { this.onToggleClick() },
        onToggleClick: function() {
            let t = this
            this.toggleLink.addEventListener('click', function(e) { e.preventDefault(), 'closed-on-mobile' == t.state ? t.state = 'open' : t.state = 'closed-on-mobile', t.nav.removeAttribute('class'), t.nav.classList.add(t.state) }, !1)
        },
        get state() { return this._state },
        set state(e) { this._state = e }
    }
    e.addButton({ tag: 'BUTTON', class: 'contrast switcher theme-switcher', target: 'body' }), e.init(), t.init()
}())