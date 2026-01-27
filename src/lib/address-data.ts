// Curated address database for MVP cantons: ZH, GE, VD, BS
// This is the MOAT - accurate parish/church office addresses

import { AddressEntry, Canton, Confession, MatchedAddress } from './types';

// Seed data for initial cantons
// In production, this would come from Supabase
export const addressBook: AddressEntry[] = [
    // ZURICH (ZH) - Catholic
    {
        id: 'zh-cath-default',
        canton: 'ZH',
        zip: '*',
        confession: 'catholic',
        recipient_name: 'Katholische Kirche im Kanton Zürich',
        addr1: 'Hirschengraben 66',
        addr2: '',
        postal: '8001',
        city: 'Zürich',
        country: 'Schweiz',
        source_note: 'Cantonal headquarters (Generalvikariat)',
        updated_at: '2026-01-27',
    },
    // ZURICH (ZH) - Reformed
    {
        id: 'zh-ref-default',
        canton: 'ZH',
        zip: '*',
        confession: 'reformed',
        recipient_name: 'Evangelisch-reformierte Landeskirche des Kantons Zürich',
        addr1: 'Hirschengraben 50',
        addr2: 'Postfach',
        postal: '8024',
        city: 'Zürich',
        country: 'Schweiz',
        source_note: 'Cantonal church council',
        updated_at: '2026-01-27',
    },
    // Zurich City specific (8000-8099)
    {
        id: 'zh-8000-cath',
        canton: 'ZH',
        zip: '8000',
        confession: 'catholic',
        recipient_name: 'Katholisch Stadt Zürich',
        addr1: 'Werdgässchen 26',
        addr2: '',
        postal: '8004',
        city: 'Zürich',
        country: 'Schweiz',
        source_note: 'City association headquarters',
        updated_at: '2026-01-27',
    },

    // GENEVA (GE) - Catholic
    {
        id: 'ge-cath-default',
        canton: 'GE',
        zip: '*',
        confession: 'catholic',
        recipient_name: 'Église catholique romaine à Genève',
        addr1: 'Rue du Général-Dufour 18',
        addr2: '',
        postal: '1204',
        city: 'Genève',
        country: 'Suisse',
        source_note: 'Maison diocésaine de Genève',
        updated_at: '2026-01-27',
    },
    // GENEVA (GE) - Reformed (Protestant)
    {
        id: 'ge-ref-default',
        canton: 'GE',
        zip: '*',
        confession: 'reformed',
        recipient_name: 'Église protestante de Genève',
        addr1: 'Rue Gourgas 24',
        addr2: 'Case postale 73',
        postal: '1211',
        city: 'Genève 8',
        country: 'Suisse',
        source_note: 'Secrétariat général (Mailing Address)',
        updated_at: '2026-01-27',
    },

    // VAUD (VD) - Catholic
    {
        id: 'vd-cath-default',
        canton: 'VD',
        zip: '*',
        confession: 'catholic',
        recipient_name: 'Fédération ecclésiastique catholique romaine du Canton de Vaud',
        addr1: 'Chemin des Mouettes 4',
        addr2: 'Case postale 234',
        postal: '1000',
        city: 'Lausanne 6',
        country: 'Suisse',
        source_note: 'Federation headquarters (Mailing Address)',
        updated_at: '2026-01-27',
    },
    // VAUD (VD) - Reformed
    {
        id: 'vd-ref-default',
        canton: 'VD',
        zip: '*',
        confession: 'reformed',
        recipient_name: 'Église évangélique réformée du Canton de Vaud',
        addr1: 'Chemin des Cèdres 7',
        addr2: '',
        postal: '1004',
        city: 'Lausanne',
        country: 'Suisse',
        source_note: 'EERV headquarters',
        updated_at: '2026-01-27',
    },

    // BASEL-STADT (BS) - Catholic
    {
        id: 'bs-cath-default',
        canton: 'BS',
        zip: '*',
        confession: 'catholic',
        recipient_name: 'Römisch-Katholische Kirche Basel-Stadt',
        addr1: 'Lindenberg 10',
        addr2: '',
        postal: '4058',
        city: 'Basel',
        country: 'Schweiz',
        source_note: 'Cantonal administration',
        updated_at: '2026-01-27',
    },
    // BASEL-STADT (BS) - Reformed
    {
        id: 'bs-ref-default',
        canton: 'BS',
        zip: '*',
        confession: 'reformed',
        recipient_name: 'Evangelisch-reformierte Kirche Basel-Stadt',
        addr1: 'Rittergasse 3',
        addr2: 'Postfach',
        postal: '4001',
        city: 'Basel',
        country: 'Schweiz',
        source_note: 'Church administration (Mailing Address)',
        updated_at: '2026-01-27',
    },
];

/**
 * Find the correct church address for a given canton, ZIP, and confession.
 * Returns exact match if available, otherwise falls back to cantonal address.
 */
export function findAddress(
    canton: Canton,
    zip: string,
    confession: Confession
): MatchedAddress {
    // First, try exact ZIP match
    const exactMatch = addressBook.find(
        (entry) =>
            entry.canton === canton &&
            entry.zip === zip &&
            entry.confession === confession
    );

    if (exactMatch) {
        return {
            found: true,
            exact: true,
            address: exactMatch,
        };
    }

    // Fallback to cantonal default (zip = '*')
    const fallback = addressBook.find(
        (entry) =>
            entry.canton === canton &&
            entry.zip === '*' &&
            entry.confession === confession
    );

    if (fallback) {
        return {
            found: true,
            exact: false,
            address: fallback,
            fallbackMessage:
                "We couldn't find your exact ZIP, but we've routed your letter to the cantonal church office.",
        };
    }

    return {
        found: false,
        exact: false,
        fallbackMessage:
            'Sorry, we do not currently support this canton. Please check back soon.',
    };
}

export const cantonNames: Record<Canton, string> = {
    ZH: 'Zürich',
    GE: 'Genève',
    VD: 'Vaud',
    BS: 'Basel-Stadt',
};

export const confessionNames: Record<Confession, string> = {
    catholic: 'Roman Catholic',
    reformed: 'Reformed Protestant',
};
