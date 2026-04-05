import { FC, useEffect, useState } from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { defaultFieldConfig } from './settings-container';
import useI18n from 'libs/web/hooks/use-i18n';

const FONTS = [
    { label: 'Geist', value: 'geist' },
    { label: 'Departure Mono', value: 'departure-mono' },
];

export const FontFamily: FC = () => {
    const { t } = useI18n();
    const [font, setFont] = useState('geist');

    useEffect(() => {
        const saved = localStorage.getItem('font') || 'geist';
        setFont(saved);
        applyFont(saved);
    }, []);

    const applyFont = (value: string) => {
        document.body.classList.remove(...FONTS.map((f) => `font-${f.value}`));
        document.body.classList.add(`font-${value}`);
    };

    const handleChange = (value: string) => {
        setFont(value);
        applyFont(value);
        localStorage.setItem('font', value);
    };

    return (
        <TextField
            {...defaultFieldConfig}
            select
            label={t('Font')}
            value={font}
            onChange={(e) => handleChange(e.target.value)}
        >
            {FONTS.map((f) => (
                <MenuItem key={f.value} value={f.value}>
                    {f.label}
                </MenuItem>
            ))}
        </TextField>
    );
};
