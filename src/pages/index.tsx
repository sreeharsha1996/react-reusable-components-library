import { useState } from "react";
import {
    ConfirmModal,
    ErrorModal,
    DataModal,
} from "../modals";
import type {
    ConfirmModalConfig,
    ErrorModalConfig,
    DataModalConfig
} from "../modals";

import TriggerCard from "../components/TriggerCard";
import SectionTitle from "../components/SectionTitle";

export default function HomePage() {
    const [confirmConfig, setConfirmConfig] = useState<ConfirmModalConfig | null>(null);
    const [errorConfig, setErrorConfig] = useState<ErrorModalConfig | null>(null);
    const [dataConfig, setDataConfig] = useState<DataModalConfig | null>(null);

    // ── Confirm Modal Examples ──────────────────────────────────────────
    function openDeleteConfirm() {
        setConfirmConfig({
            type: 'confirm',
            icon: '🗑️',
            title: 'Delete Item',
            message: 'Are you sure you want to permanently delete this item? This action cannot be undone.',
            confirmButton: { label: 'Delete', variant: 'danger', icon: '🗑️' },
            cancelButton: { label: 'Keep it', variant: 'ghost' },
            onConfirm: () => alert('✅ Item deleted!'),
        });
    }

    function openLogoutConfirm() {
        setConfirmConfig({
            type: 'confirm',
            icon: '👋',
            title: 'Log Out',
            message: 'You will be signed out of your account. Any unsaved changes will be lost.',
            confirmButton: { label: 'Log Out', variant: 'warning', icon: '👋' },
            cancelButton: { label: 'Stay', variant: 'ghost' },
            onConfirm: () => alert('✅ Logged out!'),
        });
    }

    function openPublishConfirm() {
        setConfirmConfig({
            type: 'confirm',
            icon: '🚀',
            title: 'Publish Changes',
            message: 'Your changes will go live immediately and be visible to all users.',
            confirmButton: { label: 'Publish Now', variant: 'success', icon: '🚀' },
            cancelButton: { label: 'Not yet', variant: 'ghost' },
            onConfirm: () => alert('✅ Published!'),
        });
    }

    // ── Error Modal Examples ────────────────────────────────────────────
    function openNetworkError() {
        setErrorConfig({
            type: 'error',
            title: 'Network Error',
            error: 'Failed to connect to the server. Please check your internet connection.',
            actions: [
                { label: 'Retry', variant: 'danger', onClick: () => alert('Retrying...'), icon: '🔄' },
                { label: 'Dismiss', variant: 'ghost', onClick: () => setErrorConfig(null) },
            ],
        });
    }

    function openValidationError() {
        setErrorConfig({
            type: 'error',
            title: 'Validation Failed',
            error: 'The form contains 3 errors. Please correct them before submitting.',
            details: `• Email address is invalid\n• Password must be at least 8 characters\n• Phone number format is incorrect`,
        });
    }

    function openCriticalError() {
        setErrorConfig({
            type: 'error',
            title: 'Critical System Error',
            error: 'Unhandled exception: Cannot read properties of undefined (reading "map")',
            details: 'at Array.map (<anonymous>)\nat App.tsx:42\nat invokePassiveEffectCreate\nat ReactDOM.render',
            actions: [
                { label: 'Report Bug', variant: 'danger', onClick: () => alert('Bug reported!'), icon: '🐛' },
                { label: 'Reload Page', variant: 'primary', onClick: () => location.reload(), icon: '🔄' },
            ],
        });
    }

    // ── Data Modal Examples ─────────────────────────────────────────────
    function openUserProfile() {
        setDataConfig({
            type: 'data',
            title: 'User Profile',
            subtitle: 'Registered account details',
            data: [
                { label: 'Full Name', value: 'Alex Johnson' },
                { label: 'Email', value: 'alex@example.com' },
                { label: 'Role', value: 'Admin', badge: true, badgeColor: '#818cf8' },
                { label: 'Plan', value: 'Pro', badge: true, badgeColor: '#34d399' },
                { label: 'Joined', value: 'Jan 15, 2024' },
                { label: 'Last Login', value: 'Today, 9:41 AM' },
            ],
            actions: [
                { label: 'Edit Profile', variant: 'primary', onClick: () => alert('Edit!'), icon: '✏️' },
                { label: 'Close', variant: 'ghost', onClick: () => setDataConfig(null) },
            ],
        });
    }

    function openOrderDetails() {
        setDataConfig({
            type: 'data',
            title: 'Order #ORD-2847',
            subtitle: 'Purchase summary',
            data: [
                { label: 'Product', value: 'Pro License (Annual)' },
                { label: 'Quantity', value: 3 },
                { label: 'Unit Price', value: '$49.00' },
                { label: 'Total', value: '$147.00' },
                { label: 'Status', value: 'Paid', badge: true, badgeColor: '#34d399' },
                { label: 'Payment', value: 'Visa •••• 4242' },
                { label: 'Date', value: 'Mar 3, 2026' },
            ],
            actions: [
                { label: 'Download Invoice', variant: 'success', onClick: () => alert('Downloading...'), icon: '📄' },
                { label: 'Close', variant: 'ghost', onClick: () => setDataConfig(null) },
            ],
        });
    }

    function openServerStats() {
        setDataConfig({
            type: 'data',
            title: 'Server Status',
            subtitle: 'Live system metrics',
            data: [
                { label: 'CPU Usage', value: '23%', badge: true, badgeColor: '#34d399' },
                { label: 'Memory', value: '4.2 GB / 16 GB' },
                { label: 'Disk', value: '142 GB / 500 GB' },
                { label: 'Uptime', value: '14 days 6h 22m' },
                { label: 'Region', value: 'us-east-1' },
                { label: 'Health', value: 'Healthy', badge: true, badgeColor: '#34d399' },
            ],
            actions: [
                { label: 'Restart Server', variant: 'warning', onClick: () => alert('Restarting...'), icon: '🔄' },
                { label: 'Close', variant: 'ghost', onClick: () => setDataConfig(null) },
            ],
        });
    }
    return (
        <div className="min-h-screen bg-[#0a0e1a] text-white">
            {/* Background decorations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
            </div>

            <div className="relative max-w-5xl mx-auto px-6 py-16 flex flex-col gap-16">
                {/* Page Header */}
                <div className="text-center flex flex-col gap-3">
                    <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-indigo-400 text-xs font-semibold mx-auto">
                        ✨ Reusable Modal System
                    </div>
                    <h1 className="text-5xl font-black tracking-tight bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                        React Modal Library
                    </h1>
                    <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
                        Fully dynamic modals with configurable titles, messages, icons, and action buttons.
                        Built with React, Vite, TypeScript, and Tailwind CSS.
                    </p>
                </div>

                {/* Confirm Modals */}
                <section>
                    <SectionTitle>Confirm Modals</SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <TriggerCard
                            emoji="🗑️"
                            title="Delete Confirmation"
                            description="Warn user before a destructive delete action."
                            onClick={openDeleteConfirm}
                            color="#f43f5e"
                        />
                        <TriggerCard
                            emoji="👋"
                            title="Logout Confirmation"
                            description="Ask user before ending their session."
                            onClick={openLogoutConfirm}
                            color="#f59e0b"
                        />
                        <TriggerCard
                            emoji="🚀"
                            title="Publish Confirmation"
                            description="Confirm before pushing changes live."
                            onClick={openPublishConfirm}
                            color="#10b981"
                        />
                    </div>
                </section>

                {/* Error Modals */}
                <section>
                    <SectionTitle>Error Modals</SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <TriggerCard
                            emoji="🌐"
                            title="Network Error"
                            description="Display connection failure with retry option."
                            onClick={openNetworkError}
                            color="#f43f5e"
                        />
                        <TriggerCard
                            emoji="📝"
                            title="Validation Error"
                            description="Form errors with expandable details list."
                            onClick={openValidationError}
                            color="#fb923c"
                        />
                        <TriggerCard
                            emoji="💥"
                            title="Critical Error"
                            description="Unhandled exception with stack trace + actions."
                            onClick={openCriticalError}
                            color="#e879f9"
                        />
                    </div>
                </section>

                {/* Data Modals */}
                <section>
                    <SectionTitle>Data Modals</SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <TriggerCard
                            emoji="👤"
                            title="User Profile"
                            description="Display user account info with badge statuses."
                            onClick={openUserProfile}
                            color="#818cf8"
                        />
                        <TriggerCard
                            emoji="🧾"
                            title="Order Details"
                            description="Show purchase summary with invoice download."
                            onClick={openOrderDetails}
                            color="#34d399"
                        />
                        <TriggerCard
                            emoji="🖥️"
                            title="Server Stats"
                            description="Live system metrics with action buttons."
                            onClick={openServerStats}
                            color="#60a5fa"
                        />
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center text-slate-600 text-xs border-t border-white/5 pt-8">
                    Built with React + Vite + TypeScript + Tailwind CSS
                </footer>
            </div>

            {/* Render Modals */}
            {confirmConfig && (
                <ConfirmModal
                    config={confirmConfig}
                    onClose={() => setConfirmConfig(null)}
                />
            )}
            {errorConfig && (
                <ErrorModal
                    config={errorConfig}
                    onClose={() => setErrorConfig(null)}
                />
            )}
            {dataConfig && (
                <DataModal
                    config={dataConfig}
                    onClose={() => setDataConfig(null)}
                />
            )}
        </div>
    )
}

