import LayoutMain from 'components/layout/layout-main';
import { NextPage } from 'next';
import { applyUA } from 'libs/server/middlewares/ua';
import { TreeModel } from 'libs/shared/tree';
import { useSession } from 'libs/server/middlewares/session';
import { applySettings } from 'libs/server/middlewares/settings';
import { applyAuth } from 'libs/server/middlewares/auth';
import { SettingsContainer } from 'components/settings/settings-container';
import useI18n from 'libs/web/hooks/use-i18n';
import { applyCsrf } from 'libs/server/middlewares/csrf';
import { SettingFooter } from 'components/settings/setting-footer';
import { SSRContext, ssr } from 'libs/server/connect';
import { applyReset } from 'libs/server/middlewares/reset';
import { applyMisconfiguration } from 'libs/server/middlewares/misconfiguration';
import { DebugInformation } from 'libs/shared/debugging';
import UIState from 'libs/web/state/ui';
import Link from 'next/link';

const SettingsPage: NextPage<{
    debugInformation: DebugInformation;
    tree: TreeModel;
}> = ({ tree, debugInformation }) => {
    const { t } = useI18n();
    const { ua } = UIState.useContainer();

    return (
        <LayoutMain tree={tree}>
            <section className="py-40 h-full overflow-y-auto">
                <div className="px-6 max-w-prose m-auto">
                    {ua?.isMobileOnly && (
                        <Link href="/" shallow>
                            <a className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1 mb-6 -mt-10">
                                ← {t('Back')}
                            </a>
                        </Link>
                    )}
                    <h1 className="font-normal text-4xl mb-10">
                        <span>{t('Settings')}</span>
                    </h1>
                    <SettingsContainer debugInfo={debugInformation} />
                    <SettingFooter />
                </div>
            </section>
        </LayoutMain>
    );
};

export default SettingsPage;

export const getServerSideProps = async (ctx: SSRContext) => {
    await ssr()
        .use(useSession)
        .use(applyAuth)
        .use(applyReset)
        .use(applySettings)
        .use(applyCsrf)
        .use(applyUA)
        .use(applyMisconfiguration)
        .run(ctx.req, ctx.res);

    return {
        props: ctx.req.props,
        redirect: ctx.req.redirect,
    };
};
